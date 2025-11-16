import CodeBlock from '../../components/CodeBlock';

const JsxSyntaxInCodeBlocks = () => {
  const problematicCode = `const MyComponent = () => {
  const someValue = 10;
  return (
    <pre><code>
      {/* This will cause an error if not escaped */}
      const value = {someValue};
    </code></pre>
  );
};
`;

  const solutionCode = `const MyComponent = () => {
  const someValue = 10;
  return (
    <pre><code>
      const value = {'{'}someValue{'}'};
    </code></pre>
  );
};
`;

  const templateLiteralProblem = `console.log(\`\${WrappedComponent.name} mounted.\`);`;
  const templateLiteralSolution = `console.log(\`\\\${'{'}WrappedComponent.name{'}'} mounted.\\\`);`;


  return (
    <div className="prose max-w-none">
      <h1>JSX Syntax in Code Blocks</h1>
      <p>
        When displaying code snippets within React components, especially inside <code>&lt;pre&gt;</code> and <code>&lt;code&gt;</code> tags, you might encounter "Unexpected token" errors if the code snippet itself contains JSX-like syntax (e.g., curly braces <code>{'{'}</code> or <code>{'}'}</code>, or template literals <code>{'\`'}{'\\'}{'$'}{'{'}...{'}'}{'\`'}</code>).
      </p>

      <h2>The Problem</h2>
      <p>
        React's JSX parser will try to interpret any unescaped curly braces or template literals within your JSX as actual JavaScript expressions. If these expressions are not valid in the context of your component's render method, it will lead to a syntax error.
      </p>
      <CodeBlock code={problematicCode} />

      <h2>Solution: Escaping Curly Braces</h2>
      <p>
                  To display literal curly braces within JSX, you need to escape them by wrapping them in a string literal within another set of curly braces: <code>{'{'}{'{'}</code> for <code>{'{'}</code> and <code>{'}'}{'}'}</code> for <code>{'}'}</code>.      </p>
      <CodeBlock code={solutionCode} />

      <h2>Solution: Escaping Template Literals</h2>
      <p>
        Similarly, if your code snippet contains template literals with embedded expressions, you need to escape the curly braces within the template literal's expression.
      </p>
      <CodeBlock code={templateLiteralProblem} />
      <p>Should be:</p>
      <CodeBlock code={templateLiteralSolution} />

      <p>
        By escaping these characters, you instruct the JSX parser to treat them as literal text rather than attempting to interpret them as JavaScript expressions.
      </p>
    </div>
  );
};

export default JsxSyntaxInCodeBlocks;
