import CodeBlock from '../../components/CodeBlock';

const TypeScriptBuildErrors = () => {
  const ts6133Problem = `import React, { useState } from 'react';
// ...
const MyComponent = () => {
  const [value, setValue] = useState(0);
  return <div>{value}</div>;
};`;

  const ts6133Solution = `import { useState } from 'react';
// ...
const MyComponent = () => {
  const [value, setValue] = useState(0);
  return <div>{value}</div>;
};`;

  const ts6192Problem = `import React, { Component } from 'react';
import CodeBlock from '../../components/CodeBlock';

const MyFunctionalComponent = () => {
  // ... uses CodeBlock, but not React or Component directly
  return <CodeBlock code="some code" />;
};`;

  const ts6192Solution = `import CodeBlock from '../../components/CodeBlock';

const MyFunctionalComponent = () => {
  // ... uses CodeBlock, but not React or Component directly
  return <CodeBlock code="some code" />;
};`;

  return (
    <div className="prose max-w-none">
      <h1>TypeScript Build Errors (TS6133, TS6192)</h1>
      <p>
        When working with React and TypeScript, especially with newer versions of React (17+) and modern build tools (like Vite), you might encounter TypeScript errors related to unused imports of <code>React</code> or other modules.
      </p>

      <h2>Problem: TS6133 - 'React' is declared but its value is never read.</h2>
      <p>
        This error occurs when you have <code>import React from 'react';</code> (or <code>import React, {'{'} useState {'}'} from 'react';</code>) in a file, but you don't explicitly use <code>React</code> (e.g., <code>React.useState</code>, <code>React.Component</code>) in your code. With React 17 and the new JSX transform, the compiler automatically imports <code>React</code> for JSX, making the explicit import redundant if not directly referenced.
      </p>
      <CodeBlock code={ts6133Problem} />

      <h3>Solution for TS6133</h3>
      <p>
        Remove the redundant <code>React</code> import if you are only using named exports (like <code>useState</code>, <code>useEffect</code>, etc.) and not directly referencing <code>React</code> itself.
      </p>
      <CodeBlock code={ts6133Solution} />

      <h2>Problem: TS6192 - All imports in import declaration are unused.</h2>
      <p>
        This error is similar to TS6133 but can occur for any imported module or named export that is not used in the file. It often happens when you import something for a specific purpose (e.g., <code>Component</code> for a class component example within a string literal) but the actual component in the file is a functional component that doesn't use that import.
      </p>
      <CodeBlock code={ts6192Problem} />

      <h3>Solution for TS6192</h3>
      <p>
        Identify the unused imports and remove them. If the import is only used within a string literal (e.g., a code example), it should not be part of the actual file's import statements.
      </p>
      <CodeBlock code={ts6192Solution} />

      <p>
        Always ensure your import statements only include modules or exports that are actively used in the file's executable code to avoid these TypeScript errors and keep your codebase clean.
      </p>
    </div>
  );
};

export default TypeScriptBuildErrors;
