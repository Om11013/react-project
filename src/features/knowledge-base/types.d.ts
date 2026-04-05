export interface CreateKnowledgeBasePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface KnowledgeBaseHeaderProps {
  onCreateClick: () => void;
}

export interface KnowledgeBaseCardProps {
  title: string;
  description: string;
  date: string;
}

export interface PaginationProps {
  totalRows: number;
  rowsPerPage: number;
  currentPage: number;
  totalPages: number;
}
