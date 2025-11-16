import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const conceptCards = [
  {
    to: '/concepts/components',
    title: 'Components',
    description: 'Learn about the building blocks of React applications.',
    icon: '🧱',
    color: 'blue'
  },
  {
    to: '/concepts/state',
    title: 'State',
    description: 'Understand how to manage data that changes over time.',
    icon: '🔄',
    color: 'purple'
  },
  {
    to: '/concepts/props',
    title: 'Props',
    description: 'Discover how to pass data between components.',
    icon: '🎁',
    color: 'green'
  },
  {
    to: '/concepts/hooks',
    title: 'Hooks',
    description: 'Explore functions that let you "hook into" React features.',
    icon: '🪝',
    color: 'orange'
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16 py-12 bg-white rounded-xl shadow-soft-lg">
        <div className="inline-block mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.25278C12 6.25278 10.8333 4 8 4C5.16667 4 3 6.16667 3 9C3 14 8 19 12 19C16 19 21 14 21 9C21 6.16667 18.8333 4 16 4C13.1667 4 12 6.25278 12 6.25278Z" />
            </svg>
            Start your React journey
          </span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
          Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">React Study</span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
          A curated learning path to master the fundamentals of React.
        </p>
      </div>

      {/* Concepts Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-10">Core Concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {conceptCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className={`group bg-white rounded-xl shadow-soft-lg p-8 border-l-4 border-${card.color}-500 hover:shadow-xl transition-all duration-300 flex flex-col`}
            >
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{card.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                </div>
                <p className="text-gray-600">{card.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-end text-sm font-medium text-blue-600">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
