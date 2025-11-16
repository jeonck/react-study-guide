
import CodeBlock from '../../components/CodeBlock';

const BasicElements = () => {
  const exampleCode = `const MyButton = () => {
  return <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Click Me</button>;
};

render(<MyButton />);`;

  const MyButton = () => {
    return <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Click Me</button>;
  };

  return (
    <div className="prose max-w-none">
      <h1>Basic Elements Examples</h1>
      <p>This section demonstrates basic React elements and their rendering.</p>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <h2>Code</h2>
          <CodeBlock code={exampleCode} language="jsx" />
        </div>
        <div className="w-full md:w-1/2 p-4 border rounded-lg bg-gray-50 flex items-center justify-center">
          <h2>Rendered Output</h2>
          <MyButton />
        </div>
      </div>

      {/* Add more examples here */}

    </div>
  );
};

export default BasicElements;
