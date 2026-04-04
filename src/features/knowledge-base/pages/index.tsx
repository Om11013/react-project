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
    <div className="flex flex-col h-full bg-white rounded-xl p-8 shadow-sm">
      <KnowledgeBaseHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 flex-1 content-start">
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
  );
};

export default KnowledgeBase;
