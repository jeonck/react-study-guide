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

      <h2>JSX Structure Errors: Missing Wrapper Divs</h2>
      <p>
        Another common JSX syntax error, especially when refactoring or moving components, is the "Expected corresponding JSX closing tag for &lt;tag&gt;" error. This often happens when a component expects a specific JSX structure, like a wrapper <code>&lt;div&gt;</code>, but it's missing or misplaced.
      </p>
      <h3>The Problem: Missing Wrapper for Dropdown</h3>
      <p>
        Consider a scenario where you have a dropdown menu. The dropdown button and its content might need to be wrapped in a parent <code>&lt;div&gt;</code> with a <code>position: relative</code> style and a <code>ref</code> for handling outside clicks. If this wrapper <code>&lt;div&gt;</code> is accidentally removed or not included, the JSX parser will complain about unclosed tags, even if all individual tags within the dropdown are closed.
      </p>
      <CodeBlock
        code={`// Problematic structure (simplified)
<div className="hidden md:flex items-center space-x-4">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/concepts/getting-started">Getting Started</NavLink>
  <NavLink to="/functional-components">Functional Components</NavLink>
  {/* Missing <div className="relative" ref={conceptsMenuRef}> here */}
  <button onClick={toggleConceptsMenu}>Concepts</button>
  {isConceptsMenuOpen && (
    <div className="absolute mt-2">
      <DropdownLink to="/concepts/state">State</DropdownLink>
    </div>
  )}
</div>
`}
        language="tsx"
      />
      <p>
        In the example above, the <code>&lt;button&gt;</code> and the conditional dropdown <code>&lt;div&gt;</code> are direct children of the main navigation <code>&lt;div&gt;</code>, but they are intended to be grouped within their own relative container for positioning and ref management. This leads to a JSX parsing error because the structure is not what the component (or the React runtime) expects.
      </p>
      <h3>Solution: Add the Missing Wrapper Div</h3>
      <p>
        The fix is to correctly wrap the related elements within the expected container.
      </p>
      <CodeBlock
        code={`// Corrected structure (simplified)
<div className="hidden md:flex items-center space-x-4">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/concepts/getting-started">Getting Started</NavLink>
  <NavLink to="/functional-components">Functional Components</NavLink>
  <div className="relative" ref={conceptsMenuRef}> {/* Added wrapper div */}
    <button onClick={toggleConceptsMenu}>Concepts</button>
    {isConceptsMenuOpen && (
      <div className="absolute mt-2">
        <DropdownLink to="/concepts/state">State</DropdownLink>
      </div>
    )}
  </div> {/* Closing wrapper div */}
</div>
`}
        language="tsx"
      />
      <p>
        Always ensure that complex UI elements, especially those involving dropdowns, modals, or custom positioning, have the correct and expected wrapper elements. These wrappers often provide crucial context for styling, event handling, and component logic.
      </p>
    </div>
  );
};

export default JsxSyntaxInCodeBlocks;

