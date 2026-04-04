import { Search, Plus } from 'lucide-react';

const KnowledgeBaseHeader = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-semibold text-gray-900">Knowledge Base</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-[240px] border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
          />
        </div>

        <button className="flex items-center gap-2 bg-primary hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-opacity cursor-pointer">
          <Plus className="w-4 h-4" />
          <span>Create New</span>
        </button>
      </div>
    </div>
  );
};

export default KnowledgeBaseHeader;
