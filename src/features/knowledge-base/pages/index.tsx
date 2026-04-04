import KnowledgeBaseHeader from '../components/KnowledgeBaseHeader';
import KnowledgeBaseCard from '../components/KnowledgeBaseCard';
import Pagination from '../components/Pagination';

const KNOWLEDGE_BASE_DATA = Array(6).fill({
  title: 'Test',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  date: '14/07/2025',
});

const KnowledgeBase = () => {
  return (
    <div className="flex flex-col min-h-full">
      <KnowledgeBaseHeader />
      <div className="flex-1 flex flex-col border border-gray-200 rounded-2xl p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 flex-1 content-start">
          {KNOWLEDGE_BASE_DATA.map((item, index) => (
            <KnowledgeBaseCard
              key={index}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          ))}
        </div>

        <Pagination
          totalRows={6}
          rowsPerPage={10}
          currentPage={1}
          totalPages={1}
        />
      </div>
    </div>
  );
};

export default KnowledgeBase;
