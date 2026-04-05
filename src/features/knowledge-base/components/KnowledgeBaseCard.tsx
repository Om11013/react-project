import { MoreVertical } from 'lucide-react';

import { Button } from '@/components/common/Button';

import type { KnowledgeBaseCardProps } from '../types';

const KnowledgeBaseCard = ({
  title,
  description,
  date,
}: KnowledgeBaseCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
      <div className="p-6 pb-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <Button className="text-gray-400 hover:text-gray-600 rounded-md p-1">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>

        <p className="text-sm leading-relaxed text-gray-500 line-clamp-3">
          {description}
        </p>
      </div>

      <div className="px-6 py-4 border-t border-gray-100 mt-auto">
        <span className="text-[13px] font-medium text-gray-400">
          Created On: {date}
        </span>
      </div>
    </div>
  );
};

export default KnowledgeBaseCard;
