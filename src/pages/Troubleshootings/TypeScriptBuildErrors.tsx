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

      <h2>Problem: TS2322 - Type '&#123; code: string; language: string; &#125;' is not assignable to type 'IntrinsicAttributes & CodeBlockProps'. Property 'language' does not exist on type 'IntrinsicAttributes & CodeBlockProps'.</h2>
      <p>
        This error indicates that a component is being passed a prop (e.g., <code>language</code>) that is not defined in its type interface (<code>CodeBlockProps</code>). In our case, this was a transient issue related to TypeScript's type caching or resolution, as the <code>language</code> prop was correctly defined in <code>src/components/CodeBlock.tsx</code>.
      </p>
      <h3>Solution for TS2322</h3>
      <p>
        If the prop is indeed defined in the component's interface, this error might be resolved by forcing TypeScript to re-evaluate its types. This can sometimes be achieved by making a minor change to the component's definition file (e.g., adding and then removing a comment), saving it, and then rebuilding the project.
      </p>

      <h2>Problem: TS2304 - Cannot find name '...' (e.g., 'colorClasses', 'color', 'sizeClasses', 'size') within CodeBlock examples.</h2>
      <p>
        This error occurs when TypeScript attempts to type-check the content of string literals passed to a component's prop, especially when those string literals contain code examples (like those in the <code>code</code> prop of the <code>CodeBlock</code> component). TypeScript incorrectly tries to resolve variables and types within these embedded code strings as if they were part of the parent component's executable code.
      </p>
      <h3>Solution for TS2304 in CodeBlock examples</h3>
      <p>
        To prevent TypeScript from parsing and type-checking code examples embedded as string literals, extract these code snippets into separate files with a non-TypeScript extension (e.g., <code>.tsx.txt</code>). Then, import these files as raw strings using a build tool's specific syntax (e.g., <code>?raw</code> suffix in Vite). This ensures that TypeScript treats the content as plain text, resolving the "Cannot find name" errors.
      </p>

      <h2>Problem: Unexpected token, expected "}" (JSX parsing error in HTML tags)</h2>
      <p>
        This error occurs when JSX special characters (like <code>&lt;</code>, <code>&gt;</code>, <code>&#123;</code>, <code>&#125;</code>) are used unescaped within the text content of HTML tags in a <code>.tsx</code> file. The JSX parser interprets these characters as part of the JSX syntax, leading to unexpected token errors.
      </p>
      <h3>Solution for Unexpected token in HTML tags</h3>
      <p>
        To resolve this, escape the JSX special characters within the text content of HTML tags:
        <ul>
          <li>Replace <code>&lt;</code> with <code>&amp;lt;</code></li>
          <li>Replace <code>&gt;</code> with <code>&amp;gt;</code></li>
          <li>Replace <code>&#123;</code> with <code>&amp;#123;</code></li>
          <li>Replace <code>&#125;</code> with <code>&amp;#125;</code></li>
        </ul>
        This ensures that the characters are treated as literal text rather than JSX syntax.
      </p>
      <h2>Problem: Unexpected token, expected "}" (JSX parsing error in HTML tags)</h2>
      <p>
        This error occurs when JSX special characters (like <code>&lt;</code>, <code>&gt;</code>, <code>&#123;</code>, <code>&#125;</code>) are used unescaped within the text content of HTML tags in a <code>.tsx</code> file. The JSX parser interprets these characters as part of the JSX syntax, leading to unexpected token errors.
      </p>
      <h3>Solution for Unexpected token in HTML tags</h3>
      <p>
        To resolve this, escape the JSX special characters within the text content of HTML tags:
        <ul>
          <li>Replace <code>&lt;</code> with <code>&amp;lt;</code></li>
          <li>Replace <code>&gt;</code> with <code>&amp;gt;</code></li>
          <li>Replace <code>&#123;</code> with <code>&amp;#123;</code></li>
          <li>Replace <code>&#125;</code> with <code>&amp;#125;</code></li>
        </ul>
        This ensures that the characters are treated as literal text rather than JSX syntax.
      </p>
    </div>
  );
};

export default TypeScriptBuildErrors;
