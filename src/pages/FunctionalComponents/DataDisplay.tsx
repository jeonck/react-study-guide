import React from 'react';
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
        code={`import React from 'react';

const Badge = ({ children, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
  };
  return (
    <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]}\`}>
      {children}
    </span>
  );
};

const App = () => {
  return (
    <div className="space-x-2">
      <Badge color="blue">New</Badge>
      <Badge color="green">Active</Badge>
      <Badge color="yellow">Pending</Badge>
      <Badge color="red">Urgent</Badge>
    </div>
  );
};

export default App;`}
        language="tsx"
      />

      <h2>Avatar (아바타)</h2>
      <p>
        An avatar component is used to display a user's profile picture or initials.
      </p>
      <h3>Example: User Avatar</h3>
      <CodeBlock
        code={`import React from 'react';

const Avatar = ({ src, alt, size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-8 w-8 text-sm',
    medium: 'h-10 w-10 text-base',
    large: 'h-12 w-12 text-lg',
  };
  return (
    <div className={\`relative inline-flex items-center justify-center rounded-full bg-gray-300 ${sizeClasses[size]}\`}>
      {src ? (
        <img className="h-full w-full rounded-full object-cover" src={src} alt={alt} />
      ) : (
        <span className="font-medium leading-none text-gray-600">{alt ? alt.charAt(0).toUpperCase() : '?'}</span>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar src="https://via.placeholder.com/150/FF0000/FFFFFF?text=JD" alt="John Doe" size="large" />
      <Avatar alt="Jane Smith" size="medium" />
      <Avatar src="https://via.placeholder.com/150/0000FF/FFFFFF?text=AB" alt="Alice Brown" size="small" />
    </div>
  );
};

export default App;`}
        language="tsx"
      />
    </div>
  );
};

export default DataDisplay;
