import CodeBlock from '../../components/CodeBlock';

const CustomHooks = () => {
  const customHookCode = `import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}`;

  const usageCode = `function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}`;

  return (
    <div className="prose max-w-none">
      <h1>Custom Hooks</h1>
      <p>
        A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. It's a way to extract component logic into reusable functions.
      </p>
      <p>
        When you have component logic that needs to be used by multiple components, you can extract that logic to a custom Hook.
      </p>

      <h2>Building Your Own Hook</h2>
      <p>
        Here is an example of a custom Hook that checks if a friend is online.
      </p>
      <CodeBlock code={customHookCode} />

      <h2>Using a Custom Hook</h2>
      <p>
        Now you can use this custom Hook in any component.
      </p>
      <CodeBlock code={usageCode} />

      <p>
        The state of each component is completely independent. Custom Hooks are a convention that naturally follows from the design of Hooks, rather than a React feature.
      </p>
    </div>
  );
};

export default CustomHooks;
