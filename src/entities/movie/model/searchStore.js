import { create } from 'zustand';

export const useSearchStore = create((set) => ({
    searchQuery: '',
    currentPage: 1,
    setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }), // Сброс страницы при новом поиске
    setCurrentPage: (page) => set({ currentPage: page }),
    clearSearch: () => set({ searchQuery: '', currentPage: 1 }),
}));
