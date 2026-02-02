import React from 'react';
import { useSearchStore } from '../../entities/movie';
import { useGenres } from '../../entities/movie/model/useMovies';
import {
    FiltersWrapper,
    FiltersContainer,
    FilterGroup,
    FilterLabel,
    FilterSelect,
    ClearFiltersButton,
    FilterTitle,
} from './MovieFilters.styles';

export const MovieFilters = () => {
    const { filters, setFilter, clearFilters } = useSearchStore();
    const { data: genresData } = useGenres();

    const genres = genresData?.genres || [];

    const handleGenreChange = (e) => {
        const value = e.target.value;
        setFilter('genreId', value ? Number(value) : null);
    };

    const handleYearChange = (e) => {
        const value = e.target.value;
        setFilter('year', value ? Number(value) : null);
    };

    const handleRatingChange = (e) => {
        const value = e.target.value;
        setFilter('minRating', value ? Number(value) : null);
    };

    const hasActiveFilters = filters.genreId || filters.year || filters.minRating;

    // Генерируем годы от текущего до 1900
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1900; year--) {
        years.push(year);
    }

    return (
        <FiltersWrapper>
            <FilterTitle>🎯 Фильтры</FilterTitle>
            <FiltersContainer>
                <FilterGroup>
                    <FilterLabel htmlFor="genre-filter">Жанр</FilterLabel>
                    <FilterSelect
                        id="genre-filter"
                        value={filters.genreId || ''}
                        onChange={handleGenreChange}
                    >
                        <option value="">Все жанры</option>
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        ))}
                    </FilterSelect>
                </FilterGroup>

                <FilterGroup>
                    <FilterLabel htmlFor="year-filter">Год</FilterLabel>
                    <FilterSelect
                        id="year-filter"
                        value={filters.year || ''}
                        onChange={handleYearChange}
                    >
                        <option value="">Любой год</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </FilterSelect>
                </FilterGroup>

                <FilterGroup>
                    <FilterLabel htmlFor="rating-filter">Минимальный рейтинг</FilterLabel>
                    <FilterSelect
                        id="rating-filter"
                        value={filters.minRating || ''}
                        onChange={handleRatingChange}
                    >
                        <option value="">Любой</option>
                        <option value="9">9+ ⭐</option>
                        <option value="8">8+ ⭐</option>
                        <option value="7">7+ ⭐</option>
                        <option value="6">6+ ⭐</option>
                        <option value="5">5+ ⭐</option>
                    </FilterSelect>
                </FilterGroup>

                {hasActiveFilters && (
                    <ClearFiltersButton onClick={clearFilters}>
                        ✕ Сбросить фильтры
                    </ClearFiltersButton>
                )}
            </FiltersContainer>
        </FiltersWrapper>
    );
};
