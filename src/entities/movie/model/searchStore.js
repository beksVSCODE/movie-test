import { create } from 'zustand';

export const useSearchStore = create((set) => ({
    searchQuery: '',
    currentPage: 1,
    filters: {
        genreId: null,
        year: null,
        minRating: null,
    },
    setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }), // Сброс страницы при новом поиске
    setCurrentPage: (page) => set({ currentPage: page }),
    setFilters: (filters) => set({ filters, currentPage: 1 }), // Сброс страницы при изменении фильтров
    setFilter: (filterName, value) => set((state) => ({
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
