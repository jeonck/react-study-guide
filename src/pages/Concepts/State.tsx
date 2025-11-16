import { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

const State = () => {
  const [count, setCount] = useState(0);

  const counterCode = `import React, { useState } from 'react';

function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`;

  const stateChart = `
sequenceDiagram;
    participant User;
    participant Component;
    participant React;

    User->>Component: Clicks button;
    Component->>React: Calls setCount(count + 1);
    React->>Component: Re-renders with new state;
    Component->>User: Displays updated count;
  `;

  return (
    <div className="prose max-w-none">
      <h1>State</h1>
      <p>
        State is a built-in React object that is used to contain data or information about the component. A component's state can change over time, and whenever it does, the component re-renders. State is local to the component and cannot be accessed by other components, except by passing it down as props.
      </p>

      <h2>Block Diagram</h2>
      <p>
        The following diagram illustrates the flow of a state update. A user event triggers a function that calls <code>setState</code>. This schedules a re-render of the component with the new state value.
      </p>
      <MermaidDiagram chart={stateChart} />

      <h2>Example: A Counter</h2>
      <p>
        Here is a simple example of a component that uses state to keep track of a count. The <code>useState</code> hook is used to declare a state variable called <code>count</code>.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-bold">Live Example</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
          Increment
        </button>
      </div>
      <CodeBlock code={counterCode} />

      <p>
        In this example, <code>useState(0)</code> initializes the state with <code>0</code>. <code>count</code> is the current state, and <code>setCount</code> is the function that updates it. When the button is clicked, <code>setCount</code> is called, which updates the state and causes the component to re-render, displaying the new count.
      </p>
    </div>
  );
};

export default State;
