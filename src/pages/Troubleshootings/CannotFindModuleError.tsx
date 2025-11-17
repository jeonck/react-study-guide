import React from 'react';
import CodeBlock from '../../components/CodeBlock';
import { Link } from 'react-router-dom';

const CannotFindModuleError = () => {
  const errorDescription = `
When running 'npm run build' or during development, you might encounter an error similar to:

\
Error: src/App.tsx(XX,YY): error TS2307: Cannot find module './pages/Examples' or its corresponding type declarations.
Error: Process completed with exit code 2.
\

This error indicates that a module (e.g., './pages/Examples') is being imported in a file (e.g., 'src/App.tsx'), but the TypeScript compiler cannot locate the module file itself or its type definitions.
`;

  const commonCauses = `
1.  **File Deletion/Renaming:** The most common cause is that the imported file has been deleted, moved, or renamed, but the import statement was not updated or removed.
2.  **Incorrect Path:** The import path is incorrect, pointing to a non-existent location.
3.  **Missing Declaration File:** For JavaScript modules without TypeScript, a corresponding '.d.ts' declaration file might be missing.
4.  **Caching Issues:** Sometimes, build tools or IDEs might cache old file structures, leading to stale error messages.
`;

  const resolutionSteps = `
1.  **Identify the Missing Module:** The error message usually clearly states which module cannot be found (e.g., \
'./pages/Examples'\
).
2.  **Locate the Import Statement:** Find the 
import
 statement in the specified file (e.g., 
src/App.tsx
) that is causing the error.
3.  **Verify Module Existence:**
    *   If the module was intentionally deleted (as in the case of reverting a feature), **remove the import statement and any associated usage** (e.g., 
<Route>
 components in React Router) from the importing file.
    *   If the module should exist, ensure its file path is correct and the file actually exists at that location.
4.  **Clean Build (if necessary):** If you've confirmed the import statement is correct or removed, but the error persists, try a clean build:
    \
bash
rm -rf node_modules dist
npm cache clean --force
npm install
npm run build
\
    This aggressively clears caches and rebuilds dependencies.
`;

  const exampleCode = `// src/App.tsx (before fix)
import Examples from './pages/Examples'; // Error: Cannot find module

// ...
const AppContent = () => {
  // ...
  return (
    <Routes>
      {/* ... other routes ... */}
      <Route path="/examples" element={<Examples />} /> {/* Error: Examples is not found */}
    </Routes>
  );
};

// src/App.tsx (after fix)
// Remove the import and the route if the module was deleted.
// If the module exists, correct the import path.
`;

  return (
    <div className="prose max-w-none">
      <h1>Troubleshooting: Cannot Find Module Error (TS2307)</h1>
      <p>
        The 
TS2307: Cannot find module
 error is a common TypeScript compilation issue that occurs when the compiler is unable to locate a module that is being imported in your project. This often happens after refactoring, deleting files, or when there's a mismatch between import paths and actual file locations.
      </p>

      <h2>Error Description</h2>
      <CodeBlock code={errorDescription} language="typescript" />

      <h2>Common Causes</h2>
      <CodeBlock code={commonCauses} language="markdown" />

      <h2>Resolution Steps</h2>
      <CodeBlock code={resolutionSteps} language="markdown" />

      <h2>Example Scenario (and Fix)</h2>
      <p>
        In our study guide, this error occurred when the 
Examples
 page module was deleted, but its import and route in 
src/App.tsx
 were not removed.
      </p>
      <CodeBlock code={exampleCode} language="typescript" />

      <p>
        By removing the unused import and route, the 
TS2307
 error was resolved.
      </p>
    </div>
  );
};

export default CannotFindModuleError;

