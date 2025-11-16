import CodeBlock from '../../components/CodeBlock';

const ConditionalRendering = () => {
  const ifElseCode = `function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}`;

  const ternaryCode = `function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
    </div>
  );
}`;

  const andOperatorCode = `function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}`;

  return (
    <div className="prose max-w-none">
      <h1>Conditional Rendering</h1>
      <p>
        In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application. Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like <code>if</code> or the conditional operator to create elements representing the current state, and let React update the UI to match them.
      </p>

      <h2>Using <code>if/else</code></h2>
      <p>
        A straightforward way to conditionally render a component is to use an <code>if</code> statement.
      </p>
      <CodeBlock code={ifElseCode} />

      <h2>Using the Ternary Operator</h2>
      <p>
        For more concise conditional rendering, you can use the JavaScript ternary operator.
      </p>
      <CodeBlock code={ternaryCode} />

      <h2>Using the Logical <code>&&</code> Operator</h2>
      <p>
        If you want to render something only if a condition is true, you can use the logical <code>&&</code> operator.
      </p>
      <CodeBlock code={andOperatorCode} />
    </div>
  );
};

export default ConditionalRendering;
