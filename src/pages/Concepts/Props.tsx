import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

const Props = () => {
  const propsCode = `// Child component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent component
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}`;

  const propsChart = `
graph TD;
    Parent --"props (name='Alice')"--> Child;
  `;

  return (
    <div className="prose max-w-none">
      <h1>Props</h1>
      <p>
        Props (short for "properties") are arguments passed into React components. They are the primary way to pass data from a parent component to a child component. Props are passed to components via HTML-like attributes.
      </p>

      <h2>Block Diagram</h2>
      <p>
        The following diagram illustrates how a parent component passes props to a child component. The data flows in one direction: from parent to child.
      </p>
      <MermaidDiagram chart={propsChart} />

      <h2>Example: Passing a Name</h2>
      <p>
        Here is a simple example of a <code>Greeting</code> component that receives a <code>name</code> prop from its parent component, <code>App</code>.
      </p>
      <CodeBlock code={propsCode} />

      <h2>Props are Read-Only</h2>
      <p>
        A very important rule in React is that props are read-only. A component must never modify its own props. This ensures that the data flow is predictable and easier to debug. If a component needs to change some data, it should use its own state.
      </p>
    </div>
  );
};

export default Props;
