import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
} from 'lucide-react';

import { Button } from '@/components/common/Button';

import type { PaginationProps } from '../types';

const Pagination = ({
  totalRows,
  rowsPerPage,
  currentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-sm text-gray-600 gap-6">
      <div className="font-medium text-center w-full md:w-auto">
        {totalRows} rows
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full md:w-auto">
        <div className="flex items-center gap-3 justify-between sm:justify-start w-full sm:w-auto">
          <span className="font-medium">Rows per page</span>
          <div className="relative">
            <select
              defaultValue={rowsPerPage}
              className="appearance-none border border-gray-200 rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-700 font-medium"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="font-medium">
          page {currentPage} of {totalPages}
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            className="p-1.5 rounded text-gray-400 hover:bg-gray-100 hover:text-gray-600 border border-gray-200"
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="w-4 h-4" />
          </Button>
          <Button
            className="p-1.5 rounded text-gray-400 hover:bg-gray-100 hover:text-gray-600 border border-gray-200"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            className="p-1.5 rounded text-gray-400 hover:bg-gray-100 hover:text-gray-600 border border-gray-200"
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button
            className="p-1.5 rounded text-gray-400 hover:bg-gray-100 hover:text-gray-600 border border-gray-200"
            disabled={currentPage === totalPages}
          >
            <ChevronsRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
