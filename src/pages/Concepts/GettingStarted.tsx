import CodeBlock from '../../components/CodeBlock';

const GettingStarted = () => {
  const createReactAppCode = `npx create-react-app my-app
cd my-app
npm start`;

  const viteReactCode = `npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev`;

  return (
    <div className="prose max-w-none">
      <h1>Getting Started with React for Beginners</h1>
      <p>
        Welcome to the world of React! This guide will help you set up your first React project and understand the basic concepts to get you started.
      </p>

      <h2>What is React?</h2>
      <p>
        React is a JavaScript library for building user interfaces. It allows you to create complex UIs from small and isolated pieces of code called "components."
      </p>

      <h2>Prerequisites</h2>
      <p>
        Before you start, make sure you have Node.js and npm (Node Package Manager) installed on your computer. You can download them from the official Node.js website.
      </p>

      <h2>Setting Up Your First React Project</h2>
      <p>
        There are several ways to start a new React project. We'll cover two popular methods: Create React App and Vite.
      </p>

      <h3>1. Using Create React App (CRA)</h3>
      <p>
        Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
      </p>
      <CodeBlock code={createReactAppCode} />

      <h3>2. Using Vite (Recommended for this guide)</h3>
      <p>
        Vite is a next-generation frontend tooling that provides an extremely fast development experience. It's lighter and faster than Create React App for many use cases, especially for new projects. This guide uses Vite for its examples.
      </p>
      <CodeBlock code={viteReactCode} />

      <h2>Understanding Your Project Structure</h2>
      <p>
        After setting up your project, you'll see a few important files and folders:
      </p>
      <ul>
        <li><code>public/index.html</code>: The main HTML file that serves your React application.</li>
        <li><code>src/index.tsx</code> (or <code>src/main.tsx</code>): The entry point of your React application. It renders your main App component into the HTML.</li>
        <li><code>src/App.tsx</code>: Your main application component. This is where you'll start building your UI.</li>
        <li><code>src/components/</code>: A folder where you'll typically store reusable UI components.</li>
      </ul>

      <h2>Your First Component</h2>
      <p>
        In React, everything is a component. A component is a JavaScript function that returns JSX (JavaScript XML), which is a syntax extension for JavaScript that looks like HTML.
      </p>
      <CodeBlock code={`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage: <Welcome name="Sara" />`} />

      <p>
        Now you're ready to dive deeper into React concepts! Explore the other sections of this guide to learn more.
      </p>
    </div>
  );
};

export default GettingStarted;
