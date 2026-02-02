import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const FiltersWrapper = styled.div`
    margin-bottom: 2rem;
    animation: ${fadeIn} 0.4s ease-out;
`;

export const FilterTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, #ff4757);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
`;

export const FiltersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-end;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(47, 47, 47, 0.9), rgba(31, 31, 31, 0.95));
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 
                0 0 1px rgba(229, 9, 20, 0.3);
    border: 1px solid rgba(229, 9, 20, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4),
                    0 0 20px rgba(229, 9, 20, 0.2);
        border-color: rgba(229, 9, 20, 0.2);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        align-items: stretch;
        padding: 1.5rem;
    }
`;

export const FilterGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex: 1;
    min-width: 180px;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        min-width: 100%;
    }
`;

export const FilterLabel = styled.label`
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: color 0.2s ease;
`;

export const FilterSelect = styled.select`
    padding: 0.85rem 1rem;
    font-size: 0.95rem;
    border: 2px solid rgba(128, 128, 128, 0.3);
    border-radius: 10px;
    background: linear-gradient(145deg, rgba(20, 20, 20, 0.95), rgba(30, 30, 30, 0.95));
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 500;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        background: linear-gradient(145deg, rgba(25, 25, 25, 0.95), rgba(35, 35, 35, 0.95));
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(229, 9, 20, 0.2),
                    inset 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 4px rgba(229, 9, 20, 0.15),
                    0 4px 12px rgba(229, 9, 20, 0.3),
                    inset 0 2px 4px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    option {
        padding: 0.5rem;
        background: ${({ theme }) => theme.colors.darkGray};
    }
`;

const pulse = keyframes`
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(211, 47, 47, 0.5);
    }
    50% {
        box-shadow: 0 0 0 6px rgba(211, 47, 47, 0);
    }
`;

export const ClearFiltersButton = styled.button`
    padding: 0.85rem 1.8rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, #d32f2f, #b71c1c);
    border: 2px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    align-self: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 12px rgba(211, 47, 47, 0.3);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    &:hover {
        background: linear-gradient(135deg, #ef5350, #d32f2f);
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(211, 47, 47, 0.4);
        animation: ${pulse} 1.5s infinite;

        &::before {
            left: 100%;
        }
    }

    &:active {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(211, 47, 47, 0.4);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        margin-top: 0.5rem;
    }
`;
