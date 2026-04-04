import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
} from 'lucide-react';

interface PaginationProps {
  totalRows: number;
  rowsPerPage: number;
  currentPage: number;
  totalPages: number;
}

const Pagination = ({
  totalRows,
  rowsPerPage,
  currentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-between mt-8 text-sm text-gray-600">
      <div className="font-medium">{totalRows} rows</div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
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
          <button
            className="p-1.5 rounded text-gray-400 hover:bg-gray-100 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-200"
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
          <button
            className="p-1.5 rounded text-gray-400 hover:bg-gray-100 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-200"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className="p-1.5 rounded text-gray-400 hover:bg-gray-100 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-200"
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            className="p-1.5 rounded text-gray-400 hover:bg-gray-100 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-200"
            disabled={currentPage === totalPages}
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
