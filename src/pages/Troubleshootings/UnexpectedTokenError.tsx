const UnexpectedTokenError = () => {
  return (
    <div className="prose max-w-none">
      <h1 className="text-red-600">Error: Unexpected Token</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <pre className="whitespace-pre-wrap text-sm text-gray-800">
          <code>
            [plugin:vite:react-babel] /Users/mac/ws/gemini/react-study/src/pages/Troubleshootings/ImportResolveError.tsx: Unexpected token (16:11)
              19 |       &lt;p&gt;
            /Users/mac/ws/gemini/react-study/src/pages/Troubleshootings/ImportResolveError.tsx:16:11
            14 |              19 |  const conceptCards = [
            15 |              20 |    {'{'}
            16 |            &lt;/code&gt;
               |             ^
            17 |          &lt;/pre&gt;
            18 |        &lt;/div&gt;
          </code>
        </pre>
      </div>
      <p>
        This error typically occurs in React/JSX when curly braces <code>{'{'}</code> or <code>{'}'}</code> are used within JSX content without being properly escaped, especially inside <code>&lt;pre&gt;</code> or <code>&lt;code&gt;</code> blocks where you intend to display them literally. JSX interprets unescaped curly braces as the start of a JavaScript expression.
      </p>

      <h2>Cause</h2>
      <p>
        When you want to display curly braces as literal characters within JSX, you need to escape them. If you don't, React's JSX parser tries to interpret them as JavaScript expressions, leading to syntax errors if the content inside isn't valid JavaScript.
      </p>

      <h2>Solution</h2>
      <p>
        To display literal curly braces in JSX, you need to wrap them in a string literal within another set of curly braces.
      </p>
      <pre><code>
        // Incorrect:
        &lt;code&gt;{"{"} some code {"}"}&lt;/code&gt;

        // Correct:
        &lt;code&gt;{'{'} some code {'}'}&lt;/code&gt;
      </code></pre>
      <p>
        By using <code>{'{'}{"'{'"}{'}'}</code> and <code>{'{'}{"'}'"}{'}'}</code>, you tell JSX to render the literal string <code>{'{'}</code> and <code>{'}'}</code> respectively.
      </p>
    </div>
  );
};

export default UnexpectedTokenError;
