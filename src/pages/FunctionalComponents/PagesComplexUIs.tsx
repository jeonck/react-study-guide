import React, { useState } from 'react';
import CodeBlock from '../../components/CodeBlock';

const PagesComplexUIs = () => {
  return (
    <div className="prose max-w-none">
      <h1>Pages & Complex UIs (페이지 및 복합 UI)</h1>
      <p>
        Pages and complex UI components are compositions of multiple smaller components, often integrating custom hooks and advanced state management to create complete, interactive screens.
      </p>

      <h2>Page Component (페이지 컴포넌트)</h2>
      <p>
        Page components represent entire views or screens within an application. They orchestrate various smaller components and often utilize custom hooks for data fetching, form handling, or other complex logic.
      </p>
      <h3>Example: Dashboard Page</h3>
      <CodeBlock
        code={`import React, { useState, useEffect } from 'react';

// Mock API call
const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', email: 'john.doe@example.com', notifications: 5 });
    }, 1000);
  });
};

const fetchAnalyticsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ users: 1200, sales: 5000, visitors: 8000 });
    }, 1500);
  });
};

// Reusable Card Component
const Card = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
    <p className="text-3xl font-bold text-blue-600">{value}</p>
  </div>
);

// Custom Hook for data fetching
const useData = (fetchFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchFunction()
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [fetchFunction]);

  return { data, loading, error };
};

const DashboardPage = () => {
  const { data: userData, loading: userLoading, error: userError } = useData(fetchUserData);
  const { data: analyticsData, loading: analyticsLoading, error: analyticsError } = useData(fetchAnalyticsData);

  if (userLoading || analyticsLoading) return <div className="text-center text-xl">Loading Dashboard...</div>;
  if (userError || analyticsError) return <div className="text-center text-xl text-red-500">Error loading data.</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {userData?.name}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card title="Total Users" value={analyticsData?.users} />
        <Card title="Total Sales" value={`$${analyticsData?.sales}`} />
        <Card title="New Visitors" value={analyticsData?.visitors} />
        <Card title="Notifications" value={userData?.notifications} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <p className="text-gray-600">No new activity to display.</p>
      </div>
    </div>
  );
};

export default DashboardPage;
`}
        language="tsx"
      />

      <h2>Form (폼)</h2>
      <p>
        Forms are complex UI components that gather user input through various input fields. They often involve validation, submission logic, and can benefit from custom hooks for managing form state and logic.
      </p>
      <h3>Example: Registration Form with Basic Validation</h3>
      <CodeBlock
        code={`import React, { useState } from 'react';

// Custom Hook for form handling
const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // Simulate form submission
  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      alert('Form submitted successfully!\n' + JSON.stringify(values, null, 2));
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, values]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  };
};

const validateForm = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = 'Username is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  return errors;
};

const RegistrationForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    { username: '', email: '', password: '' },
    validateForm
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Register</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className={`shadow appearance-none border ${errors.username ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="username"
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className={`shadow appearance-none border ${errors.email ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className={`shadow appearance-none border ${errors.password ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
          id="password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
`}
        language="tsx"
      />
    </div>
  );
};

export default PagesComplexUIs;
