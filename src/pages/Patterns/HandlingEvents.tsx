import CodeBlock from '../../components/CodeBlock';

const HandlingEvents = () => {
  const eventCode = `function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}`;

  return (
    <div className="prose max-w-none">
      <h1>Handling Events</h1>
      <p>
        Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
      </p>
      <ul>
        <li>React events are named using camelCase, rather than lowercase.</li>
        <li>With JSX you pass a function as the event handler, rather than a string.</li>
      </ul>
      <p>
        For example, the HTML:
      </p>
      <pre><code>
        {`<button onclick="activateLasers()">
  Activate Lasers
</button>`}
      </code></pre>
      <p>
        is slightly different in React:
      </p>
      <pre><code>
        {`<button onClick={activateLasers}>
  Activate Lasers
</button>`}
      </code></pre>

      <h2>Passing Arguments to Event Handlers</h2>
      <p>
        Inside a loop, it is common to want to pass an extra parameter to an event handler. For example, if <code>id</code> is the row ID, either of the following would work:
      </p>
      <pre><code>
        {`<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>`}
      </code></pre>

      <h2>Example</h2>
      <p>
        Here is an example of how to handle a click event on a link.
      </p>
      <CodeBlock code={eventCode} />
    </div>
  );
};

export default HandlingEvents;
