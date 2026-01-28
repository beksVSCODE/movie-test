// Базовые типы для фильмов
export interface Movie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
}

// Детальная информация о фильме
export interface MovieDetails extends Omit<Movie, 'genre_ids'> {
    budget: number;
    revenue: number;
    runtime: number | null;
    status: string;
    tagline: string | null;
    homepage: string | null;
    imdb_id: string | null;
    genres: Genre[];
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    spoken_languages: SpokenLanguage[];
}

// Жанр
export interface Genre {
    id: number;
    name: string;
}

// Компания-производитель
export interface ProductionCompany {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
}

// Страна производства
export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

// Язык
export interface SpokenLanguage {
    iso_639_1: string;
    name: string;
    english_name: string;
}

// Ответ API со списком фильмов
export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

// Параметры запроса
export interface MovieQueryParams {
    page?: number;
    sort_by?: string;
    query?: string;
}
