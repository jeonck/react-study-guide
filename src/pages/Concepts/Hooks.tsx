import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

const Hooks = () => {
  const hooksCode = `import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This function will run after the component renders
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []); // The empty array means this effect runs only once

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{data.someValue}</div>;
}`;

  const hooksChart = `
graph TD;
    subgraph "Functional Component"
        direction LR
        A[useState]
        B[useEffect]
    end
    subgraph "React Features"
        direction LR
        C[State]
        D[Lifecycle]
    end
    A -- "Hooks into" --> C;
    B -- "Hooks into" --> D;
  `;

  return (
    <div className="prose max-w-none">
      <h1>Hooks</h1>
      <p>
        Hooks are functions that let you “hook into” React state and lifecycle features from function components. They were introduced in React 16.8 and have become the standard way to write components. Hooks don't work inside classes — they let you use React without classes.
      </p>

      <h2>Block Diagram</h2>
      <p>
        The following diagram illustrates how Hooks allow a functional component to access React features like state (with <code>useState</code>) and side effects (with <code>useEffect</code>).
      </p>
      <MermaidDiagram chart={hooksChart} />

      <h2>Example: Using `useState` and `useEffect`</h2>
      <p>
        Here is an example of a component that uses both the <code>useState</code> and <code>useEffect</code> hooks. It fetches data from an API and displays it.
      </p>
      <CodeBlock code={hooksCode} />

      <h2>Benefits of Hooks</h2>
      <ul>
        <li>
          <strong>Reusing stateful logic:</strong> Hooks let you extract stateful logic from a component so it can be tested independently and reused.
        </li>
        <li>
          <strong>Simpler components:</strong> Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods.
        </li>
        <li>
          <strong>No classes:</strong> Hooks let you use more of React’s features without classes, which can be a barrier to learning React.
        </li>
      </ul>
    </div>
  );
};

export default Hooks;
