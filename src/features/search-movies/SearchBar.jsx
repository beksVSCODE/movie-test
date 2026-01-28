import React from 'react';
import { useSearchStore } from '../../entities/movie';
import {
    SearchWrapper,
    SearchContainer,
    SearchInput,
    SearchIcon,
    ClearButton,
    SearchInfo,
} from './SearchBar.styles';

export const SearchBar = () => {
    const { searchQuery, setSearchQuery, clearSearch } = useSearchStore();

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleClear = () => {
        clearSearch();
    };

    return (
        <SearchWrapper>
            <SearchContainer>
                <SearchIcon>🔍</SearchIcon>
                <SearchInput
                    type="text"
                    placeholder="Поиск фильмов..."
                    value={searchQuery}
                    onChange={handleChange}
                />
                {searchQuery && (
                    <ClearButton onClick={handleClear} aria-label="Очистить поиск">
                        ✕
                    </ClearButton>
                )}
            </SearchContainer>
            <SearchInfo>
                {searchQuery.length > 0 && searchQuery.length < 3 && (
                    'Введите минимум 3 символа для поиска'
                )}
            </SearchInfo>
        </SearchWrapper>
    );
};
