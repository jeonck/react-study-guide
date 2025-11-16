import React, { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

const InteractionsFeedback = () => {
  return (
    <div className="prose max-w-none">
      <h1>Interactions & Feedback (사용자 상호작용)</h1>
      <p>
        Interaction and feedback components are designed to receive user input, provide interactive elements, and communicate system status or responses to the user.
      </p>

      <h2>Modal / Pop-up (모달/팝업)</h2>
      <p>
        Modals or pop-ups are used to display important information or gather input without navigating away from the current page. They typically overlay the main content and manage their open/closed state using React's <code>useState</code> hook.
      </p>
      <h3>Example: Basic Modal</h3>
      <CodeBlock
        code={`import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
      <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
        </div>
        <div className="mt-3 text-center">
          {children}
          <div className="mt-4">
            <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Welcome!">
        <p>This is a simple modal dialog built with React and Tailwind CSS.</p>
      </Modal>
    </div>
  );
};

export default App;`}
        language="tsx"
      />

      <h2>Dropdown / Select (드롭다운)</h2>
      <p>
        Dropdowns allow users to select one option from a predefined list. Their visibility and selected value are typically managed with <code>useState</code>.
      </p>
      <h3>Example: Basic Dropdown</h3>
      <CodeBlock
        code={`import React, { useState } from 'react';

const Dropdown = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption.label : placeholder}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <a
                key={option.value}
                href="#"
                onClick={() => handleSelect(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  const handleOptionSelect = (option) => {
    alert(`Selected: ${option.label}`);
  };

  return (
    <Dropdown
      options={options}
      onSelect={handleOptionSelect}
      placeholder="Select an option"
    />
  );
};

export default App;`}
        language="tsx"
      />

      <h2>Toggle / Switch (토글/스위치)</h2>
      <p>
        Toggles or switches allow users to change between two states (e.g., On/Off, True/False). They often manage their state with <code>useState</code> and can sometimes be implemented using the Compound Components pattern for more flexibility.
      </p>
      <h3>Example: Simple Toggle Switch</h3>
      <CodeBlock
        code={`import React, { useState } from 'react';

const ToggleSwitch = ({ isOn, handleToggle, onColor = 'bg-green-500', offColor = 'bg-gray-300' }) => {
  return (
    <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="toggle"
          type="checkbox"
          className="sr-only"
          checked={isOn}
          onChange={handleToggle}
        />
        <div className={\`block 
          ${isOn ? onColor : offColor} w-14 h-8 rounded-full`}/>
        <div
          className={
            `dot absolute left-1 top-1 
            ${isOn ? 'translate-x-full bg-white' : 'bg-white'} w-6 h-6 rounded-full transition`
          }
        />
      </div>
    </label>
  );
};

const App = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <span>Notifications:</span>
      <ToggleSwitch
        isOn={isNotificationsEnabled}
        handleToggle={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
      />
      <span>{isNotificationsEnabled ? 'On' : 'Off'}</span>
    </div>
  );
};

export default App;`}
        language="tsx"
      />

      <h2>Loading Spinner (로딩 스피너)</h2>
      <p>
        Loading spinners provide visual feedback to the user that an operation is in progress. They are typically rendered conditionally based on a loading state.
      </p>
      <h3>Example: Basic Loading Spinner</h3>
      <CodeBlock
        code={`import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a 3-second loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <p className="text-center text-green-600 font-bold">Data Loaded!</p>
      )}
    </div>
  );
};

export default App;`}
        language="tsx"
      />

      <h2>Tooltip (툴팁)</h2>
      <p>
        Tooltips display additional information when a user hovers over or focuses on an element.
      </p>
      <h3>Example: Simple Tooltip</h3>
      <CodeBlock
        code={`import React, { useState } from 'react';

const Tooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative flex items-center">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-pointer"
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-full mb-2 px-3 py-1 bg-gray-700 text-white text-sm rounded-md whitespace-nowrap">
          {text}
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="flex justify-center p-10">
      <Tooltip text="This is a helpful tooltip!">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Hover over me</button>
      </Tooltip>
    </div>
  );
};

export default App;`}
        language="tsx"
      />
    </div>
  );
};

export default InteractionsFeedback;