import React from 'react';
import {
  PaginationWrapper,
  PageButton,
  PageInfo,
  Ellipsis,
} from './Pagination.styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  const maxPagesToShow = 5;

  const getPageNumbers = (): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = [];
    
    if (totalPages <= maxPagesToShow) {
      // Показываем все страницы если их мало
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Логика для большого количества страниц
      if (currentPage <= 3) {
        // Начало списка
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Конец списка
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Середина списка
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const handlePrevious = (): void => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = (): void => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <PaginationWrapper>
      <PageButton
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Предыдущая страница"
      >
        ←
      </PageButton>

      {getPageNumbers().map((page, index) => {
        if (page === 'ellipsis') {
          return <Ellipsis key={`ellipsis-${index}`}>...</Ellipsis>;
        }

        return (
          <PageButton
            key={page}
            onClick={() => onPageChange(page)}
            $active={page === currentPage}
            aria-label={`Страница ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </PageButton>
        );
      })}

      <PageButton
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Следующая страница"
      >
        →
      </PageButton>

      <PageInfo>
        {currentPage} / {totalPages}
      </PageInfo>
    </PaginationWrapper>
  );
};
