import CodeBlock from '../../components/CodeBlock';

const Primitives = () => {
  return (
    <div className="prose max-w-none">
      <h1>Primitives (기본 요소)</h1>
      <p>
        Primitives are the smallest and most reusable building blocks of a UI. They form the foundation upon which more complex components are built.
      </p>

      <h2>Button (버튼)</h2>
      <p>
        A button component handles user clicks and can have various states like active, inactive, or disabled.
      </p>
      <h3>Example: Basic Button</h3>
      <CodeBlock
        code={`import React, { useState } from 'react';

const Button = ({ onClick, children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={'px-4 py-2 rounded-md ' + (disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600') + ' transition-colors'}
    >
      {children}
    </button>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div className="space-x-2">
      <Button onClick={handleClick}>Click me ({count})</Button>
      <Button onClick={() => alert('Disabled button clicked!')} disabled>Disabled Button</Button>
    </div>
  );
};

export default App;`}
        language="tsx"
      />

      <h2>Input Field (입력 필드)</h2>
      <p>
        Input fields allow users to enter text or other data. They are typically controlled components in React, meaning their value is managed by React state.
      </p>
      <h3>Example: Controlled Input</h3>
      <CodeBlock
        code={`import React, { useState } from 'react';

const InputField = ({ label, value, onChange, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <InputField
        label="Name:"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        label="Email:"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>Hello, {name || 'Guest'}! Your email is {email || 'not provided'}.</p>
    </div>
  );
};

export default App;`}
        language="tsx"
      />

      <h2>Link / Navigation Element (링크/내비게이션 요소)</h2>
      <p>
        Links are used for navigation within the application. When using React Router, <code>Link</code> or <code>NavLink</code> components are preferred over standard <code>&lt;a&gt;</code> tags to prevent full page reloads.
      </p>
      <h3>Example: React Router Links</h3>
      <CodeBlock
        code={`import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Routes, Route } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
  return (
    <Router>
      <nav className="mb-4 space-x-4">
        <Link to="/" className="text-blue-500 hover:underline">Home (Link)</Link>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-purple-700 font-bold' : 'text-blue-500 hover:underline'}>About (NavLink)</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-purple-700 font-bold' : 'text-blue-500 hover:underline'}>Contact (NavLink)</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;`}
        language="tsx"
      />

      <h2>Icon (아이콘)</h2>
      <p>
        Icons are simple visual elements used to convey meaning or enhance UI aesthetics. They can be implemented using SVG, icon fonts, or image files.
      </p>
      <h3>Example: SVG Icon</h3>
      <CodeBlock
        code={`import React from 'react';

const StarIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const App = () => {
  return (
    <div className="flex items-center space-x-4">
      <StarIcon />
      <StarIcon size={36} color="gold" />
      <StarIcon size={48} color="red" />
      <p>Rating: <StarIcon size={16} color="orange" /> 4.5</p>
    </div>
  );
};

export default App;`}
        language="tsx"
      />
    </div>
  );
};

export default Primitives;
