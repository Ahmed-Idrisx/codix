"use client";

import { ProfileTab, tabs } from "@/constants/site";

interface ProfileSidebarProps {
  activeTab: ProfileTab;
  setActiveTab: (tab: ProfileTab) => void;
}

const ProfileSidebar = ({ activeTab, setActiveTab }: ProfileSidebarProps) => {
  return (
    <aside className="order-1 hidden md:col-span-1 md:block">
      <div className="space-y-2 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex w-full items-center gap-3 rounded-full px-5 py-3 text-sm font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-blue-800 text-white shadow-md shadow-blue-500/20"
                  : "text-gray-600 bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <Icon className="h-4.5 w-4.5" />

              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default ProfileSidebar;
