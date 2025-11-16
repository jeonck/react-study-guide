import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const LayoutContainers = () => {
  return (
    <div className="prose max-w-none">
      <h1>Layout & Containers (레이아웃 및 컨테이너)</h1>
      <p>
        Layout and container components are crucial for structuring the visual presentation of an application. They define how other components are arranged on a page.
      </p>

      <h2>Layout (레이아웃)</h2>
      <p>
        A layout component provides a consistent structure for pages, often including common elements like headers, footers, and sidebars. It typically uses <code>props.children</code> to render dynamic content within its predefined structure.
      </p>
      <h3>Example: Basic Layout Component</h3>
      <CodeBlock
        code={`import React from 'react';

const Header = () => (
  <header className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
    My Awesome App
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center text-sm">
    © 2023 My Awesome App
  </footer>
);

const Sidebar = () => (
  <aside className="w-48 bg-gray-100 p-4">
    <nav>
      <ul>
        <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Dashboard</a></li>
        <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Settings</a></li>
        <li className="mb-2"><a href="#" className="text-blue-600 hover:underline">Reports</a></li>
      </ul>
    </nav>
  </aside>
);

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard!</h2>
      <p>This is the main content area of your application.</p>
      <p>Feel free to add more components and features here.</p>
    </Layout>
  );
};

export default App;`}
        language="tsx"
      />

      <h2>Header and Footer (헤더 및 푸터)</h2>
      <p>
        These components are specific parts of a layout, often used to display global navigation, branding, or copyright information.
      </p>
      <h3>Example: Standalone Header and Footer</h3>
      <CodeBlock
        code={`import React from 'react';

const Header = () => (
  <header className="bg-green-700 text-white p-3 flex justify-between items-center">
    <h1 className="text-xl font-bold">My Brand</h1>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Products</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
      </ul>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-700 text-gray-300 p-3 text-center text-xs">
    <p>&copy; 2023 My Brand. All rights reserved.</p>
  </footer>
);

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">
        <p>Main content goes here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;`}
        language="tsx"
      />

      <h2>Grid / Stack (그리드/스택)</h2>
      <p>
        Grid and Stack components are used purely for arranging child elements, typically leveraging CSS Flexbox or Grid properties. They focus solely on layout rather than content.
      </p>
      <h3>Example: Flexbox Stack Component</h3>
      <CodeBlock
        code={`import React from 'react';

const Stack = ({ children, direction = 'row', spacing = 4 }) => {
  const style = {
    display: 'flex',
    flexDirection: direction,
    gap: \`\\\${spacing * 0.25}rem\` // Tailwind's default spacing unit is 0.25rem
  };
  return <div style={style}>{children}</div>;
};

const App = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Horizontal Stack</h2>
      <Stack spacing={8}>
        <div className="p-4 bg-blue-200 rounded">Item 1</div>
        <div className="p-4 bg-green-200 rounded">Item 2</div>
        <div className="p-4 bg-red-200 rounded">Item 3</div>
      </Stack>

      <h2 className="text-xl font-semibold mt-4 mb-2">Vertical Stack</h2>
      <Stack direction="column" spacing={6}>
        <div className="p-4 bg-yellow-200 rounded">Item A</div>
        <div className="p-4 bg-purple-200 rounded">Item B</div>
      </Stack>
    </div>
  );
};

export default App;`}
        language="tsx"
      />
    </div>
  );
};

export default LayoutContainers;
