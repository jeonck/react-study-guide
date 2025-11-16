import CodeBlock from '../../components/CodeBlock';

const HigherOrderComponents = () => {
  const hocCode = `function withLogger(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      console.log(\`\${'{'}WrappedComponent.name{'}'} mounted.\`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// Usage
class MyComponent extends Component {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

const EnhancedComponent = withLogger(MyComponent);

// In another component's render method:
// <EnhancedComponent name="Alice" />`;

  return (
    <div className="prose max-w-none">
      <h1>Higher-Order Components (HOCs)</h1>
      <p>
        A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
      </p>
      <p>
        Concretely, <strong>a higher-order component is a function that takes a component and returns a new component.</strong>
      </p>

      <h2>Example: A Logger HOC</h2>
      <p>
        Here is an example of a simple HOC called <code>withLogger</code> that logs when a component mounts.
      </p>
      <CodeBlock code={hocCode} />

      <h2>Don't Mutate the Original Component</h2>
      <p>
        The key characteristic of HOCs is that they don't modify the input component, nor do they use inheritance to copy its behavior. Instead, a HOC composes the original component by wrapping it in a container component. By composing <code>WrappedComponent</code> inside a container component, you can configure the component with props or manage state.
      </p>
    </div>
  );
};

export default HigherOrderComponents;
