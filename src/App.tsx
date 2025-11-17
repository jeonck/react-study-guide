import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FunctionalComponentsOverview from './pages/FunctionalComponents/Overview';
import FunctionalComponentsUIsOverview from './pages/FunctionalComponents/UIsOverview';
import Primitives from './pages/FunctionalComponents/Primitives';
import LayoutContainers from './pages/FunctionalComponents/LayoutContainers';
import DataDisplay from './pages/FunctionalComponents/DataDisplay';
import InteractionsFeedback from './pages/FunctionalComponents/InteractionsFeedback';
import PagesComplexUIs from './pages/FunctionalComponents/PagesComplexUIs';
import State from './pages/Concepts/State';
import Props from './pages/Concepts/Props';
import Hooks from './pages/Concepts/Hooks';
import ConceptsComponents from './pages/Concepts/Components';
import GettingStarted from './pages/Concepts/GettingStarted';
import ImportResolveError from './pages/Troubleshootings/ImportResolveError';
import UnexpectedTokenError from './pages/Troubleshootings/UnexpectedTokenError';
import JsxSyntaxInCodeBlocks from './pages/Troubleshootings/JsxSyntaxInCodeBlocks';
import CodeBlockStyling from './pages/Troubleshootings/CodeBlockStyling';
import TypeScriptBuildErrors from './pages/Troubleshootings/TypeScriptBuildErrors';
import RouterHookError from './pages/Troubleshootings/RouterHookError';
import ConditionalRendering from './pages/Patterns/ConditionalRendering';
import ListsAndKeys from './pages/Patterns/ListsAndKeys';
import HandlingEvents from './pages/Patterns/HandlingEvents';
import CustomHooks from './pages/Patterns/CustomHooks';
import HigherOrderComponents from './pages/Patterns/HigherOrderComponents';
import RenderProps from './pages/Patterns/RenderProps';



// Component to handle the location logging inside the router context
const AppContent = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Current path:', location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concepts/getting-started" element={<GettingStarted />} />
          <Route path="/functional-components" element={<FunctionalComponentsOverview />} />
          <Route path="/functional-components/uis-overview" element={<FunctionalComponentsUIsOverview />} />
          <Route path="/functional-components/primitives" element={<Primitives />} />
          <Route path="/functional-components/layout-containers" element={<LayoutContainers />} />
          <Route path="/functional-components/data-display" element={<DataDisplay />} />
          <Route path="/functional-components/interactions-feedback" element={<InteractionsFeedback />} />
          <Route path="/functional-components/pages-complex-uis" element={<PagesComplexUIs />} />
          <Route path="/concepts/state" element={<State />} />
          <Route path="/concepts/props" element={<Props />} />
          <Route path="/concepts/hooks" element={<Hooks />} />
          <Route path="/concepts/components" element={<ConceptsComponents />} />
          <Route path="/troubleshootings/import-resolve-error" element={<ImportResolveError />} />
          <Route path="/troubleshootings/unexpected-token-error" element={<UnexpectedTokenError />} />
          <Route path="/troubleshootings/jsx-syntax-in-code-blocks" element={<JsxSyntaxInCodeBlocks />} />
          <Route path="/troubleshootings/code-block-styling" element={<CodeBlockStyling />} />
          <Route path="/troubleshootings/typescript-build-errors" element={<TypeScriptBuildErrors />} />
          <Route path="/troubleshootings/router-hook-error" element={<RouterHookError />} />
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
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
