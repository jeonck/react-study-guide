import React from 'react';

const RouterHookError = () => {
  return (
    <div className="prose max-w-none">
      <h1>React Router Hook Error: useLocation may be used only in the context of a &lt;Router&gt; component</h1>
      
      <p className="text-lg text-gray-700">
        When using React Router hooks like <code className="bg-gray-100 px-1 rounded">useLocation</code>, <code className="bg-gray-100 px-1 rounded">useParams</code>, or <code className="bg-gray-100 px-1 rounded">useNavigate</code> directly in a component that is not wrapped by a Router component, you'll encounter this error.
      </p>

      <h2 className="text-xl font-semibold mt-6">Problem</h2>
      <p className="text-gray-700">
        The error <code className="bg-gray-100 px-1 rounded">useLocation() may be used only in the context of a &lt;Router&gt; component</code> occurs when trying to use React Router hooks in a component that is not within the Router's context.
      </p>

      <h2 className="text-xl font-semibold mt-6">Example of Problematic Code</h2>
      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
        {`function App() {
  const location = useLocation(); // ❌ This will cause an error

  React.useEffect(() => {
    console.log('Current path:', location.pathname);
  }, [location]);

  return (
    <Router> {/* Router context is created AFTER the hook is used */}
      <div className="min-h-screen bg-gray-50">
        {/* ... */}
      </div>
    </Router>
  );
}`}
      </pre>

      <h2 className="text-xl font-semibold mt-6">Solution</h2>
      <p className="text-gray-700">
        The solution is to ensure that any component using React Router hooks is properly nested within the Router context. This can be achieved by either:
      </p>
      <ol className="list-decimal pl-6 mt-2 space-y-2">
        <li>
          Moving the hook usage to a child component that is rendered inside the Router context
        </li>
        <li>
          Making sure the component using the hook is rendered within the Router's context
        </li>
      </ol>

      <h2 className="text-xl font-semibold mt-6">Corrected Code</h2>
      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
        {`// Component to handle the location logging inside the router context
const AppContent = () => {
  const location = useLocation(); // ✅ Hook used inside Router context

  React.useEffect(() => {
    console.log('Current path:', location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ... */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent /> {/* Router hook used in child component */}
    </Router>
  );
}`}
      </pre>

      <h2 className="text-xl font-semibold mt-6">Additional Considerations</h2>
      <p className="text-gray-700">
        Another common cause of this error is incorrect import syntax. Make sure you're importing from react-router-dom correctly:
      </p>
      
      <h3 className="text-lg font-medium mt-4">Incorrect Import</h3>
      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
        {`import React, { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';`}
      </pre>
      
      <h3 className="text-lg font-medium mt-4">Correct Import</h3>
      <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
        {`import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';`}
      </pre>

      <h2 className="text-xl font-semibold mt-6">Summary</h2>
      <p className="text-gray-700">
        The key to avoiding this error is ensuring that React Router hooks are used only within components that are descendants of a Router component (like BrowserRouter, HashRouter, etc.). Always verify:
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Correct import syntax for react-router-dom</li>
        <li>Router component properly wraps child components that use hooks</li>
        <li>Router hooks are not called at the top level of a component outside the Router context</li>
      </ul>
    </div>
  );
};

export default RouterHookError;