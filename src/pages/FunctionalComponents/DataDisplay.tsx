import AvatarExampleCode from './code-examples/AvatarExample.tsx.txt?raw';
import BadgeExampleCode from './code-examples/BadgeExample.tsx.txt?raw';
import CodeBlock from '../../components/CodeBlock';

const DataDisplay = () => {
  return (
    <div className="prose max-w-none">
      <h1>Data Display (데이터 표시)</h1>
      <p>
        Data display components are used to present information to the user in an organized and visually appealing manner. They focus on rendering data rather than user interaction.
      </p>

      <h2>Card (카드)</h2>
      <p>
        A card component is a flexible and extensible content container. It includes options for headers, footers, and a wide variety of content.
      </p>
      <h3>Example: Basic Card Component</h3>
      <CodeBlock
        code={`import React from 'react';

const Card = ({ title, description, imageUrl, children }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {imageUrl && <img className="w-full" src={imageUrl} alt={title} />}
      <div className="px-6 py-4">
        {title && <div className="font-bold text-xl mb-2">{title}</div>}
        {description && <p className="text-gray-700 text-base">{description}</p>}
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Card
        title="React Component"
        description="A reusable piece of UI. Components let you split the UI into independent, reusable pieces, and think about each piece in isolation."
        imageUrl="https://via.placeholder.com/300x200?text=React"
      />
      <Card title="Functional Programming">
        <p className="text-gray-700 text-base">
          A programming paradigm where programs are constructed by applying and composing functions.
        </p>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#functional</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#programming</span>
        </div>
      </Card>
    </div>
  );
};

export default App;`}
        language="tsx"
      />

      <h2>List (목록)</h2>
      <p>
        List components are used to display collections of items. They are often rendered by mapping over an array of data.
      </p>
      <h3>Example: Simple List</h3>
      <CodeBlock
        code={`import React from 'react';

const List = ({ items }) => {
  return (
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index} className="text-gray-800 py-1">{item}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  const tasks = ['Buy groceries', 'Walk the dog', 'Finish report'];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Fruits</h2>
      <List items={fruits} />
      <h2 className="text-xl font-semibold mt-4 mb-2">Tasks</h2>
      <List items={tasks} />
    </div>
  );
};

export default App;`}
        language="tsx"
      />

      <h2>Badge / Tag (배지/태그)</h2>
      <p>
        Badges or tags are small, informative components used to highlight status, categories, or counts.
      </p>
      <h3>Example: Status Badges</h3>
      <CodeBlock
        code={BadgeExampleCode}
        language="tsx"
      />

      <h2>Avatar (아바타)</h2>
      <p>
        An avatar component is used to display a user's profile picture or initials.
      </p>
      <h3>Example: User Avatar</h3>
      <CodeBlock
        code={AvatarExampleCode}
        language="tsx"
      />
    </div>
  );
};

export default DataDisplay;
