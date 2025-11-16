import { useState } from 'react';

interface ExpandableCardProps {
  title: string;
  summary: string;
  children: React.ReactNode;
  icon?: string;
  accentColor?: 'blue' | 'purple' | 'green' | 'orange';
}

const ExpandableCard = ({ title, summary, children, icon, accentColor = 'blue' }: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const accentColors = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
  };

  const borderColors = {
    blue: 'border-blue-200 dark:border-blue-800',
    purple: 'border-purple-200 dark:border-purple-800',
    green: 'border-green-200 dark:border-green-800',
    orange: 'border-orange-200 dark:border-orange-800',
  };

  return (
    <div className={`card-elevated border-l-4 ${borderColors[accentColor]} overflow-hidden`}>
      {/* Header Section */}
      <div className="p-8">
        <div className="flex items-start gap-4">
          {icon && (
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${accentColors[accentColor]} flex items-center justify-center text-white text-2xl shadow-lg`}>
              {icon}
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-balance">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
              {summary}
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-6 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 bg-gradient-to-r ${accentColors[accentColor]} text-white hover:shadow-lg hover:scale-105 active:scale-95`}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? '내용 접기' : '내용 펼치기'}
        >
          <span>{isExpanded ? '접기' : '더보기'}</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <div className="p-8 animate-fadeIn">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;
