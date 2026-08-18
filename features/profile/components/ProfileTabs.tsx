"use client";

import { ProfileTab, tabs } from "@/constants/site";

interface ProfileTabsProps {
  activeTab: ProfileTab;
  setActiveTab: (tab: ProfileTab) => void;
}

const ProfileTabs = ({ activeTab, setActiveTab }: ProfileTabsProps) => {
  return (
    <div className="mt-8 flex gap-2 md:hidden">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-2 py-2.5 text-xs font-semibold transition-all duration-200 ${
              isActive
                ? "bg-blue-800 text-white shadow-md shadow-blue-500/20"
                : "text-gray-600 bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" />

            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ProfileTabs;
