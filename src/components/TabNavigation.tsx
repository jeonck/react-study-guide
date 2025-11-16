import { useState, ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon: string;
  content: ReactNode;
  accentColor?: 'blue' | 'purple' | 'green' | 'orange';
}

interface TabNavigationProps {
  tabs: TabItem[];
  defaultTab?: string;
}

const TabNavigation = ({ tabs, defaultTab }: TabNavigationProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const accentColors = {
    blue: {
      border: 'border-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
      gradient: 'from-blue-500 to-blue-600',
    },
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      text: 'text-purple-600 dark:text-purple-400',
      gradient: 'from-purple-500 to-purple-600',
    },
    green: {
      border: 'border-green-500',
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400',
      gradient: 'from-green-500 to-green-600',
    },
    orange: {
      border: 'border-orange-500',
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      text: 'text-orange-600 dark:text-orange-400',
      gradient: 'from-orange-500 to-orange-600',
    },
  };

  const activeTabData = tabs.find(tab => tab.id === activeTab);
  const activeColor = activeTabData?.accentColor || 'blue';
  const colors = accentColors[activeColor];

  return (
    <div className="w-full">
      {/* Tab Navigation - Desktop */}
      <div className="hidden lg:block mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex gap-2 -mb-px" aria-label="Tabs">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const tabColors = accentColors[tab.accentColor || 'blue'];

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    group relative px-6 py-4 text-sm font-medium rounded-t-lg transition-all duration-200
                    ${isActive
                      ? `${tabColors.bg} ${tabColors.text} border-b-2 ${tabColors.border}`
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tab.icon}</span>
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </div>
                  {isActive && (
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${tabColors.gradient}`} />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Tab Navigation - Mobile (Dropdown) */}
      <div className="lg:hidden mb-6">
        <label htmlFor="tab-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          섹션 선택
        </label>
        <div className="relative">
          <select
            id="tab-select"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className={`
              block w-full px-4 py-3 pr-10 rounded-lg border-2
              ${colors.border} ${colors.bg} ${colors.text}
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${activeColor}-500
              transition-all duration-200 appearance-none cursor-pointer
              text-base font-medium
            `}
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.icon} {tab.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
            <svg className={`h-5 w-5 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            hidden={activeTab !== tab.id}
            className={`
              ${activeTab === tab.id ? 'animate-fadeIn' : ''}
            `}
            aria-labelledby={`tab-${tab.id}`}
          >
            {activeTab === tab.id && (
              <div className={`card-elevated p-8 lg:p-10 border-l-4 ${accentColors[tab.accentColor || 'blue'].border}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${accentColors[tab.accentColor || 'blue'].gradient} flex items-center justify-center text-white text-3xl shadow-lg`}>
                    {tab.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {tab.label}
                    </h2>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  {tab.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
