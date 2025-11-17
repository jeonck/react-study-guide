import CodeBlock from '../../components/CodeBlock';

const ImportResolveError = () => {
  const errorExample = `[plugin:vite:import-analysis] Failed to resolve import "lucide-react" from "src/pages/Home.tsx". Does the file exist?
/Users/mac/ws/gemini/react-study/src/pages/Home.tsx:2:27
16 |  {'{'}
17 |  import {'{'} Link {'}'} from "react-router-dom";
18 |  import {'{'} ArrowRight {'}'} from "lucide-react";
   |                              ^
19 |  const conceptCards = [
20 |    {'{'}`;

  const npmInstallCode = `npm install <package-name>`;
  const yarnAddCode = `yarn add <package-name>`;
  const rmNodeModulesViteCode = `rm -rf node_modules/.vite`;

  return (
    <div className="prose max-w-none">
      <h1 className="text-red-600">Error: Failed to Resolve Import</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <CodeBlock code={errorExample} language="bash" />
      </div>
      <p>
        This error indicates that the module bundler (like Vite) could not find the specified module during compilation. This often happens when a package is not installed, or there's an issue with the import path or caching.
      </p>

      <h2>Common Causes and Solutions</h2>

      <h3>1. The package is not installed</h3>
      <p>
        This is the most common reason. You are trying to import a package that has not been installed in your project.
      </p>
      <CodeBlock code={npmInstallCode} language="bash" />
      <p>or</p>
      <CodeBlock code={yarnAddCode} language="bash" />

      <h3>2. Incorrect import path</h3>
      <p>
        You might be using a wrong path to import a local file or a module. Double-check the path.
      </p>

      <h3>3. Vite/Webpack cache issue</h3>
      <p>
        Sometimes the bundler's cache can get corrupted. Clearing the cache can solve the issue. For Vite, you can delete the <code>node_modules/.vite</code> directory.
      </p>
      <CodeBlock code={rmNodeModulesViteCode} language="bash" />
      <p>Then, restart the development server.</p>

      <h3>4. Package not exporting the module correctly</h3>
      <p>
        The package might not be exporting the module in the way you are trying to import it. Check the package's documentation for correct usage.
      </p>
    </div>
  );
};

export default ImportResolveError;
