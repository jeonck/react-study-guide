import React from 'react';

const FunctionalComponentUIs = () => {
  return (
    <div className="prose max-w-none">
      <h1>Functional Components: UI Types and Implementation</h1>
      <p>
        Functional components are the current standard in React development and can implement all types of UIs we commonly know. This is because all functionalities previously possible with Class Components can now be achieved equivalently through Hooks.
      </p>

      <h2>🎨 Common UI Types Implementable with Functional Components</h2>

      <h3>1. ⚛️ Primitives (기본 요소)</h3>
      <p>
        These are the smallest, most reusable foundational building blocks of a UI.
      </p>
      <ul>
        <li><strong>버튼 (Button):</strong> Handles click events and manages state (e.g., active/inactive).</li>
        <li><strong>입력 필드 (Input, Textarea):</strong> Receives user input and is implemented as a controlled component using <code>useState</code> to manage its state.</li>
        <li><strong>링크/내비게이션 요소 (Link, NavLink):</strong> Used with routing libraries (e.g., React Router).</li>
        <li><strong>아이콘 (Icon):</strong> Simple visual representation elements.</li>
      </ul>

      <h3>2. 🗂️ Layout & Containers (레이아웃 및 컨테이너)</h3>
      <p>
        These components structure the page or wrap other components.
      </p>
      <ul>
        <li><strong>레이아웃 (Layout):</strong> Includes common structures like headers, footers, and sidebars, implemented using the <code>props.children</code> pattern to insert internal content.</li>
        <li><strong>헤더 및 푸터 (Header, Footer):</strong> Displays global navigation or copyright information.</li>
        <li><strong>그리드/스택 (Grid, Stack):</strong> Manages the arrangement of child elements using CSS Flexible Box or Grid properties.</li>
      </ul>

      <h3>3. 🖼️ Data Display (데이터 표시)</h3>
      <p>
        These components are responsible for showing specific information to the user.
      </p>
      <ul>
        <li><strong>카드 (Card):</strong> Groups related information like images, titles, and descriptions for a clean display.</li>
        <li><strong>목록 (List, ListItem):</strong> Used to iteratively render array data using the <code>map()</code> function.</li>
        <li><strong>배지/태그 (Badge, Tag):</strong> Displays status or categorization concisely.</li>
        <li><strong>아바타 (Avatar):</strong> Displays user profile images.</li>
      </ul>

      <h3>4. ⚙️ Interactions & Feedback (사용자 상호작용)</h3>
      <p>
        These components receive user input or provide system feedback.
      </p>
      <ul>
        <li><strong>모달/팝업 (Modal, Dialog):</strong> Blurs the background and displays important information centrally, managing its open/closed state with <code>useState</code>.</li>
        <li><strong>드롭다운 (Dropdown, Select):</strong> Displays a list of options and manages the selected value using <code>useState</code>.</li>
        <li><strong>토글/스위치 (Toggle, Switch):</strong> Displays and changes On/Off states, sometimes implemented with the Compound Components pattern.</li>
        <li><strong>로딩 스피너 (Spinner, LoadingBar):</strong> Implemented with a conditional rendering pattern to indicate data is loading.</li>
        <li><strong>툴팁 (Tooltip):</strong> Displays additional information on mouse hover.</li>
      </ul>

      <h3>5. 📑 Pages & Complex UIs (페이지 및 복합 UI)</h3>
      <p>
        These combine multiple components to form a complete screen.
      </p>
      <ul>
        <li><strong>페이지 컴포넌트 (HomePage, DashboardPage):</strong> Combines various smaller components and Custom Hooks to compose an entire screen.</li>
        <li><strong>폼 (Form):</strong> Contains multiple input components and handles validation and submission logic using Custom Hooks like <code>useForm</code>.</li>
      </ul>

      <p>
        In conclusion, thanks to React Hooks, functional components are fully equipped with all necessary features, including state management, lifecycle management, and performance optimization (e.g., <code>useMemo</code>, <code>useCallback</code>). They are perfectly capable of building UIs for all environments, such as websites, dashboards, and mobile apps (React Native).
      </p>
    </div>
  );
};

export default FunctionalComponentUIs;
