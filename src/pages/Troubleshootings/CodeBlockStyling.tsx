import CodeBlock from '../../components/CodeBlock';

const CodeBlockStyling = () => {
  const problematicCode = `<div className="relative bg-gray-800 rounded-lg p-4 my-4">
  <pre className="text-white font-mono text-sm overflow-x-auto">
    <code>{code}</code>
  </pre>
</div>`;

  const solutionCode = `<div className="relative bg-gray-800 rounded-lg p-4 my-4">
  <pre className="!bg-gray-800 !text-white font-mono text-sm overflow-x-auto">
    <code>{code}</code>
  </pre>
</div>`;

  return (
    <div className="prose max-w-none">
      <h1>Code Block Styling Issues (White Background)</h1>
      <p>
        When using a component like <code>CodeBlock</code> that explicitly sets its background and text colors (e.g., dark background, light text), you might encounter issues where the styling doesn't apply as expected, resulting in a white background and unreadable text.
      </p>

      <h2>The Problem</h2>
      <p>
        This often happens when a CSS framework's typography plugin or global styles override the component's intended styling. For instance, Tailwind CSS's Typography plugin (<code>@tailwindcss/typography</code>) can apply default styles to <code>pre</code> and <code>code</code> tags, including a light background, when they are rendered within a <code>prose</code> container.
      </p>
      <p>
        Even if your <code>CodeBlock</code> component has classes like <code>bg-gray-800</code> and <code>text-white</code>, the Typography plugin's styles might take precedence.
      </p>
      <CodeBlock code={problematicCode} />

      <h2>The Solution: Using `!important` with Tailwind CSS</h2>
      <p>
        To ensure your component's styles override any conflicting global or plugin-based styles, you can use Tailwind's <code>!important</code> modifier. By prefixing a utility class with <code>!</code> (e.g., <code>!bg-gray-800</code>), you make that style rule <code>!important</code> in the generated CSS, giving it higher specificity.
      </p>
      <CodeBlock code={solutionCode} />
      <p>
        By adding <code>!bg-gray-800</code> and <code>!text-white</code> directly to the <code>pre</code> tag within the <code>CodeBlock</code> component, we ensure that the dark background and white text are applied, overriding any default styles from the Typography plugin or other sources.
      </p>
    </div>
  );
};

export default CodeBlockStyling;
