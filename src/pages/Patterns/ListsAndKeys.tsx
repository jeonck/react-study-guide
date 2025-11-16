import CodeBlock from '../../components/CodeBlock';

const ListsAndKeys = () => {
  const listCode = `const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);`;

  const keylessErrorCode = `function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
// Warning: Each child in a list should have a unique "key" prop.`;

  const keyedCode = `function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}`;

  return (
    <div className="prose max-w-none">
      <h1>Lists and Keys</h1>
      <p>
        Rendering lists of elements is a very common task in React. You can use the <code>map()</code> function to iterate over an array and return a list of React elements.
      </p>
      <CodeBlock code={listCode} />

      <h2>Keys</h2>
      <p>
        Keys help React identify which items have changed, are added, or are removed. Keys should be stable, predictable, and unique. They should be given to the elements inside the array to give the elements a stable identity.
      </p>
      <p>
        When you don't provide keys, React will give you a warning.
      </p>
      <CodeBlock code={keylessErrorCode} />

      <p>
        The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys.
      </p>
      <CodeBlock code={keyedCode} />

      <h2>Why are Keys Important?</h2>
      <p>
        Keys are crucial for efficient updates. Without keys, React has to re-render the entire list every time it changes. With keys, React can identify which items have changed and only re-render those specific items, which can lead to significant performance improvements.
      </p>
    </div>
  );
};

export default ListsAndKeys;
