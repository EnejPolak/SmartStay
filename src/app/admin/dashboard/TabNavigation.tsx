"use client";

interface TabNavigationProps {
  activeTab: "new" | "all";
  onTabChange: (tab: "new" | "all") => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="sticky top-0 z-10 -mx-4 border-b border-white/10 bg-black/20 px-4 backdrop-blur">
      <div className="flex gap-4">
        <button 
          onClick={() => onTabChange("new")} 
          className={`relative px-3 py-3 text-sm font-medium text-zinc-300 hover:text-white ${activeTab === "new" ? "text-white" : ""}`}
        >
          New Blog Post
          {activeTab === "new" && (
            <span className="absolute inset-x-0 -bottom-px block h-0.5 rounded-full bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA]" />
          )}
        </button>
        <button 
          onClick={() => onTabChange("all")} 
          className={`relative px-3 py-3 text-sm font-medium text-zinc-300 hover:text-white ${activeTab === "all" ? "text-white" : ""}`}
        >
          All Posts
          {activeTab === "all" && (
            <span className="absolute inset-x-0 -bottom-px block h-0.5 rounded-full bg-gradient-to-r from-[#8B7CDF] to-[#60A5FA]" />
          )}
        </button>
      </div>
    </div>
  );
}
