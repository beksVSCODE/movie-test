import { create } from 'zustand';

interface SearchStore {
  searchQuery: string;
  currentPage: number;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
  clearSearch: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: '',
  currentPage: 1,
  setSearchQuery: (query: string) => set({ searchQuery: query, currentPage: 1 }), // Сброс страницы при новом поиске
  setCurrentPage: (page: number) => set({ currentPage: page }),
  clearSearch: () => set({ searchQuery: '', currentPage: 1 }),
}));
