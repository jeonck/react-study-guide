import CodeBlock from '../../components/CodeBlock';
import MermaidDiagram from '../../components/MermaidDiagram';

const Components = () => {
  const functionalComponentCode = `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`;

  const classComponentCode = `class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`;

  const componentChart = `
graph TD;
    App --> Header;
    App --> Content;
    Content --> Article;
  `;

  return (
    <div className="prose max-w-none">
      <h1>Components</h1>
      <p>
        Components are the building blocks of a React application. They are independent and reusable bits of code that return a piece of the user interface. A React application is typically composed of many components, organized in a a tree-like structure.
      </p>

      <h2>Block Diagram</h2>
      <p>
        The following diagram illustrates a simple component hierarchy. The <code>App</code> component is the root, and it has two children: <code>Header</code> and <code>Content</code>. The <code>Content</code> component, in turn, has an <code>Article</code> component as its child.
      </p>
      <MermaidDiagram chart={componentChart} />

      <h2>Functional Components</h2>
      <p>
        Functional components are the modern and recommended way to write React components. They are simple JavaScript functions that accept props and return a React element.
      </p>
      <CodeBlock code={functionalComponentCode} />

      <h2>Class Components</h2>
      <p>
        Class components are an older way to write components. They are ES6 classes that extend <code>React.Component</code> and have a <code>render</code> method. While still supported, functional components with Hooks are generally preferred.
      </p>
      <CodeBlock code={classComponentCode} />

      <h2>Reusability</h2>
      <p>
        The power of components lies in their reusability. You can create a component once and use it in many different places in your application, with different data (props).
      </p>
    </div>
  );
};

export default Components;
