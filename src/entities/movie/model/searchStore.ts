import { create } from 'zustand';
import type { MovieFilters } from '../../../shared/types';

interface SearchStore {
  searchQuery: string;
  currentPage: number;
  filters: MovieFilters;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
  setFilters: (filters: MovieFilters) => void;
  setFilter: (filterName: keyof MovieFilters, value: number | null) => void;
  clearFilters: () => void;
  clearSearch: () => void;
  clearAll: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: '',
  currentPage: 1,
  filters: {
    genreId: null,
    year: null,
    minRating: null,
  },
  setSearchQuery: (query: string) => set({ searchQuery: query, currentPage: 1 }), // Сброс страницы при новом поиске
  setCurrentPage: (page: number) => set({ currentPage: page }),
  setFilters: (filters: MovieFilters) => set({ filters, currentPage: 1 }), // Сброс страницы при изменении фильтров
  setFilter: (filterName: keyof MovieFilters, value: number | null) => set((state) => ({
    filters: { ...state.filters, [filterName]: value },
    currentPage: 1,
  })),
  clearFilters: () => set({
    filters: {
      genreId: null,
      year: null,
      minRating: null,
    },
    currentPage: 1,
  }),
  clearSearch: () => set({ searchQuery: '', currentPage: 1 }),
  clearAll: () => set({
    searchQuery: '',
    currentPage: 1,
    filters: {
      genreId: null,
      year: null,
      minRating: null,
    },
  }),
}));
