import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Components from './pages/Concepts/Components';
import State from './pages/Concepts/State';
import Props from './pages/Concepts/Props';
import Hooks from './pages/Concepts/Hooks';
import GettingStarted from './pages/Concepts/GettingStarted';
import ImportResolveError from './pages/Troubleshootings/ImportResolveError';
import UnexpectedTokenError from './pages/Troubleshootings/UnexpectedTokenError';
import JsxSyntaxInCodeBlocks from './pages/Troubleshootings/JsxSyntaxInCodeBlocks';
import ConditionalRendering from './pages/Patterns/ConditionalRendering';
import ListsAndKeys from './pages/Patterns/ListsAndKeys';
import HandlingEvents from './pages/Patterns/HandlingEvents';
import CustomHooks from './pages/Patterns/CustomHooks';
import HigherOrderComponents from './pages/Patterns/HigherOrderComponents';
import RenderProps from './pages/Patterns/RenderProps';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concepts/getting-started" element={<GettingStarted />} />
            <Route path="/concepts/components" element={<Components />} />
            <Route path="/concepts/state" element={<State />} />
            <Route path="/concepts/props" element={<Props />} />
            <Route path="/concepts/hooks" element={<Hooks />} />
            <Route path="/troubleshootings/import-resolve-error" element={<ImportResolveError />} />
            <Route path="/troubleshootings/unexpected-token-error" element={<UnexpectedTokenError />} />
            <Route path="/troubleshootings/jsx-syntax-in-code-blocks" element={<JsxSyntaxInCodeBlocks />} />
            <Route path="/patterns/conditional-rendering" element={<ConditionalRendering />} />
            <Route path="/patterns/lists-and-keys" element={<ListsAndKeys />} />
            <Route path="/patterns/handling-events" element={<HandlingEvents />} />
            <Route path="/patterns/custom-hooks" element={<CustomHooks />} />
            <Route path="/patterns/higher-order-components" element={<HigherOrderComponents />} />
            <Route path="/patterns/render-props" element={<RenderProps />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
