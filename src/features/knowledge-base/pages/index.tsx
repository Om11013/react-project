import { useState } from 'react';

import KnowledgeBaseHeader from '../components/KnowledgeBaseHeader';
import KnowledgeBaseCard from '../components/KnowledgeBaseCard';
import Pagination from '../components/Pagination';
import CreateKnowledgeBasePanel from '../components/CreateKnowledgeBasePanel';

export const KNOWLEDGE_BASE_DATA = Array(6).fill({
  title: 'Test',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  date: '14/07/2025',
});

const KnowledgeBase = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-full">
      <KnowledgeBaseHeader onCreateClick={() => setIsPanelOpen(true)} />
      <div className="flex-1 flex flex-col">
        <div className="border border-gray-200 p-3 rounded-2xl mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {KNOWLEDGE_BASE_DATA.map((item, index) => (
              <KnowledgeBaseCard
                key={index}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <Pagination
            totalRows={6}
            rowsPerPage={10}
            currentPage={1}
            totalPages={1}
          />
        </div>
      </div>

      <CreateKnowledgeBasePanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
    </div>
  );
};

export default KnowledgeBase;
