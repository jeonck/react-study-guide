import CodeBlock from '../../components/CodeBlock';

const RenderProps = () => {
  const mouseTrackerCode = `import React from 'react';

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '200px', border: '1px solid black' }} onMouseMove={this.handleMouseMove}>
        {/*
          Instead of providing a static representation of what to render,
          the MouseTracker provides a render prop that gives the consuming
          component control over what to render with the current state of the MouseTracker.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

function Cat(props) {
  return (
    <img src="https://react.dev/images/mouse.svg" style={{ position: 'absolute', left: props.mouse.x, top: props.mouse.y }} />
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <MouseTracker render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}`;

  return (
    <div className="prose max-w-none">
      <h1>Render Props</h1>
      <p>
        The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function.
      </p>
      <p>
        A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
      </p>

      <h2>Example: Mouse Tracker</h2>
      <p>
        Here is an example of a <code>MouseTracker</code> component that uses a render prop to share its mouse position state with a <code>Cat</code> component.
      </p>
      <CodeBlock code={mouseTrackerCode} />

      <h2>Why Use Render Props?</h2>
      <p>
        Render props are useful for cross-cutting concerns like data-fetching, subscriptions, or any stateful logic that needs to be reused across multiple components. They provide a flexible way to share behavior without coupling components too tightly.
      </p>
    </div>
  );
};

export default RenderProps;
