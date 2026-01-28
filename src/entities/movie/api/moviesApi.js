import { axiosInstance } from '../../../shared/api/axios.instance';

export const moviesApi = {
    // Получить популярные фильмы
    getPopularMovies: async (page = 1) => {
        const { data } = await axiosInstance.get('/discover/movie', {
            params: {
                sort_by: 'popularity.desc',
                page,
            },
        });
        return data;
    },

    // Получить детали фильма
    getMovieDetails: async (movieId) => {
        const { data } = await axiosInstance.get(`/movie/${movieId}`);
        return data;
    },

    // Поиск фильмов
    searchMovies: async (query, page = 1) => {
        const { data } = await axiosInstance.get('/search/movie', {
            params: {
                query,
                page,
            },
        });
        return data;
    },
};
