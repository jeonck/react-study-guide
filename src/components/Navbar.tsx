import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConceptsMenuOpen, setIsConceptsMenuOpen] = useState(false);
  const [isFunctionalComponentsMenuOpen, setIsFunctionalComponentsMenuOpen] = useState(false);
  const [isTroubleshootingMenuOpen, setIsTroubleshootingMenuOpen] = useState(false);
  const [isPatternsMenuOpen, setIsPatternsMenuOpen] = useState(false);
  const conceptsMenuRef = useRef<HTMLDivElement>(null);
  const functionalComponentsMenuRef = useRef<HTMLDivElement>(null);
  const troubleshootingMenuRef = useRef<HTMLDivElement>(null);
  const patternsMenuRef = useRef<HTMLDivElement>(null);

  const toggleConceptsMenu = () => {
    setIsConceptsMenuOpen(!isConceptsMenuOpen);
    setIsFunctionalComponentsMenuOpen(false);
    setIsTroubleshootingMenuOpen(false);
    setIsPatternsMenuOpen(false);
  };

  const toggleFunctionalComponentsMenu = () => {
    setIsFunctionalComponentsMenuOpen(!isFunctionalComponentsMenuOpen);
    setIsConceptsMenuOpen(false);
    setIsTroubleshootingMenuOpen(false);
    setIsPatternsMenuOpen(false);
  };

  const toggleTroubleshootingMenu = () => {
    setIsTroubleshootingMenuOpen(!isTroubleshootingMenuOpen);
    setIsConceptsMenuOpen(false);
    setIsPatternsMenuOpen(false);
  };

  const togglePatternsMenu = () => {
    setIsPatternsMenuOpen(!isPatternsMenuOpen);
    setIsConceptsMenuOpen(false);
    setIsTroubleshootingMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (conceptsMenuRef.current && !conceptsMenuRef.current.contains(event.target as Node)) {
        setIsConceptsMenuOpen(false);
      }
      if (functionalComponentsMenuRef.current && !functionalComponentsMenuRef.current.contains(event.target as Node)) {
        setIsFunctionalComponentsMenuOpen(false);
      }
      if (troubleshootingMenuRef.current && !troubleshootingMenuRef.current.contains(event.target as Node)) {
        setIsTroubleshootingMenuOpen(false);
      }
      if (patternsMenuRef.current && !patternsMenuRef.current.contains(event.target as Node)) {
        setIsPatternsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-soft-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:opacity-80 transition-opacity flex items-center gap-2">
              <span className="text-3xl">⚛️</span>
              <span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">React Study Guide</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/concepts/getting-started">Getting Started</NavLink>
            <div className="relative" ref={functionalComponentsMenuRef}>
              <button
                onClick={toggleFunctionalComponentsMenu}
                className="px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 flex items-center"
              >
                Functional Components
                <svg className={`w-4 h-4 ml-1 transition-transform ${isFunctionalComponentsMenuOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isFunctionalComponentsMenuOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg py-2 animate-fadeIn">
                  <DropdownLink to="/functional-components">Overview</DropdownLink>
                  <DropdownLink to="/functional-components/uis-overview">UI Types Overview</DropdownLink>
                  <DropdownLink to="/functional-components/primitives">Primitives</DropdownLink>
                  <DropdownLink to="/functional-components/layout-containers">Layout & Containers</DropdownLink>
                  <DropdownLink to="/functional-components/data-display">Data Display</DropdownLink>
                  <DropdownLink to="/functional-components/interactions-feedback">Interactions & Feedback</DropdownLink>
                  <DropdownLink to="/functional-components/pages-complex-uis">Pages & Complex UIs</DropdownLink>
                </div>
              )}
            </div>
            <div className="relative" ref={conceptsMenuRef}>
              <button
                onClick={toggleConceptsMenu}
                className="px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 flex items-center"
              >
                Concepts
                <svg className={`w-4 h-4 ml-1 transition-transform ${isConceptsMenuOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isConceptsMenuOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg py-2 animate-fadeIn">
                  <DropdownLink to="/concepts/state">State</DropdownLink>
                  <DropdownLink to="/concepts/props">Props</DropdownLink>
                  <DropdownLink to="/concepts/hooks">Hooks</DropdownLink>
                </div>
              )}
            </div>
            <div className="relative" ref={patternsMenuRef}>
              <button
                onClick={togglePatternsMenu}
                className="px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 flex items-center"
              >
                Patterns
                <svg className={`w-4 h-4 ml-1 transition-transform ${isPatternsMenuOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isPatternsMenuOpen && (
                <div className="absolute mt-2 w-56 bg-white rounded-lg shadow-lg py-2 animate-fadeIn">
                  <DropdownLink to="/patterns/conditional-rendering">Conditional Rendering</DropdownLink>
                  <DropdownLink to="/patterns/lists-and-keys">Lists and Keys</DropdownLink>
                  <DropdownLink to="/patterns/handling-events">Handling Events</DropdownLink>
                  <DropdownLink to="/patterns/custom-hooks">Custom Hooks</DropdownLink>
                  <DropdownLink to="/patterns/higher-order-components">Higher-Order Components</DropdownLink>
                  <DropdownLink to="/patterns/render-props">Render Props</DropdownLink>
                </div>
              )}
            </div>
            <div className="relative" ref={troubleshootingMenuRef}>
              <button
                onClick={toggleTroubleshootingMenu}
                className="px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 flex items-center"
              >
                Troubleshootings
                <svg className={`w-4 h-4 ml-1 transition-transform ${isTroubleshootingMenuOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isTroubleshootingMenuOpen && (
                <div className="absolute mt-2 w-56 bg-white rounded-lg shadow-lg py-2 animate-fadeIn">
                  <DropdownLink to="/troubleshootings/import-resolve-error">Import/Resolve Errors</DropdownLink>
                  <DropdownLink to="/troubleshootings/unexpected-token-error">Unexpected Token Error</DropdownLink>
                  <DropdownLink to="/troubleshootings/jsx-syntax-in-code-blocks">JSX Syntax in Code Blocks</DropdownLink>
                  <DropdownLink to="/troubleshootings/code-block-styling">Code Block Styling Issues</DropdownLink>
                  <DropdownLink to="/troubleshootings/typescript-build-errors">TypeScript Build Errors</DropdownLink>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-fadeIn">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/concepts/getting-started">Getting Started</MobileNavLink>
            <div className="relative">
              <button onClick={toggleFunctionalComponentsMenu} className="w-full text-left block px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200">
                Functional Components
              </button>
              {isFunctionalComponentsMenuOpen && (
                <div className="pl-4">
                  <MobileNavLink to="/functional-components">Overview</MobileNavLink>
                  <MobileNavLink to="/functional-components/uis-overview">UI Types Overview</MobileNavLink>
                  <MobileNavLink to="/functional-components/primitives">Primitives</MobileNavLink>
                  <MobileNavLink to="/functional-components/layout-containers">Layout & Containers</MobileNavLink>
                  <MobileNavLink to="/functional-components/data-display">Data Display</MobileNavLink>
                  <MobileNavLink to="/functional-components/interactions-feedback">Interactions & Feedback</MobileNavLink>
                  <MobileNavLink to="/functional-components/pages-complex-uis">Pages & Complex UIs</MobileNavLink>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={toggleConceptsMenu} className="w-full text-left block px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200">
                Concepts
              </button>
              {isConceptsMenuOpen && (
                <div className="pl-4">
                  <MobileNavLink to="/concepts/state">State</MobileNavLink>
                  <MobileNavLink to="/concepts/props">Props</MobileNavLink>
                  <MobileNavLink to="/concepts/hooks">Hooks</MobileNavLink>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={togglePatternsMenu} className="w-full text-left block px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200">
                Patterns
              </button>
              {isPatternsMenuOpen && (
                <div className="pl-4">
                  <MobileNavLink to="/patterns/conditional-rendering">Conditional Rendering</MobileNavLink>
                  <MobileNavLink to="/patterns/lists-and-keys">Lists and Keys</MobileNavLink>
                  <MobileNavLink to="/patterns/handling-events">Handling Events</MobileNavLink>
                  <MobileNavLink to="/patterns/custom-hooks">Custom Hooks</MobileNavLink>
                  <MobileNavLink to="/patterns/higher-order-components">Higher-Order Components</MobileNavLink>
                  <MobileNavLink to="/patterns/render-props">Render Props</MobileNavLink>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={toggleTroubleshootingMenu} className="w-full text-left block px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200">
                Troubleshootings
              </button>
              {isTroubleshootingMenuOpen && (
                <div className="pl-4">
                  <MobileNavLink to="/troubleshootings/import-resolve-error">Import/Resolve Errors</MobileNavLink>
                  <MobileNavLink to="/troubleshootings/unexpected-token-error">Unexpected Token Error</MobileNavLink>
                  <MobileNavLink to="/troubleshootings/jsx-syntax-in-code-blocks">JSX Syntax in Code Blocks</MobileNavLink>
                  <MobileNavLink to="/troubleshootings/code-block-styling">Code Block Styling Issues</MobileNavLink>
                  <MobileNavLink to="/troubleshootings/typescript-build-errors">TypeScript Build Errors</MobileNavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200"
  >
    {children}
  </Link>
);

const DropdownLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200"
  >
    {children}
  </Link>
);

export default Navbar;

