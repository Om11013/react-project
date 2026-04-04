import { Search, Plus } from 'lucide-react';
import { Button } from '@/components/common/Button';

const KnowledgeBaseHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6 md:mb-8">
      <h1 className="text-2xl font-semibold text-gray-900">Knowledge Base</h1>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
        <div className="relative w-full sm:w-auto">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-[240px] border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
          />
        </div>

        <Button className="flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium w-full sm:w-auto">
          <Plus className="w-4 h-4" />
          <span>Create New</span>
        </Button>
      </div>
    </div>
  );
};

export default KnowledgeBaseHeader;
