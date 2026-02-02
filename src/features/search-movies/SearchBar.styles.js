import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

export const SearchWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SearchContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  transition: transform 0.3s ease;

  &:focus-within {
    transform: scale(1.02);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1.2rem 3.5rem;
  padding-left: 60px;
  font-size: 1.1rem;
  background: linear-gradient(145deg, rgba(47, 47, 47, 0.9), rgba(31, 31, 31, 0.95));
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid rgba(229, 9, 20, 0.2);
  border-radius: 50px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2),
              inset 0 1px 3px rgba(255, 255, 255, 0.05);
  font-weight: 500;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 400;
  }
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 32px rgba(229, 9, 20, 0.3),
                0 0 0 4px rgba(229, 9, 20, 0.1),
                inset 0 1px 3px rgba(255, 255, 255, 0.05);
    background: linear-gradient(145deg, rgba(52, 52, 52, 0.95), rgba(36, 36, 36, 0.98));
  }

  &:hover:not(:focus) {
    border-color: rgba(229, 9, 20, 0.4);
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  pointer-events: none;
  animation: ${float} 3s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(229, 9, 20, 0.3));
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, rgba(229, 9, 20, 0.8), rgba(183, 28, 28, 0.8));
  border: none;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(229, 9, 20, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, rgba(239, 83, 80, 0.9), rgba(211, 47, 47, 0.9));
    transform: translateY(-50%) scale(1.15) rotate(90deg);
    box-shadow: 0 6px 16px rgba(229, 9, 20, 0.5);
  }

  &:active {
    transform: translateY(-50%) scale(1.05) rotate(90deg);
  }
`;

export const SearchInfo = styled.div`
  text-align: center;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  font-weight: 500;
  font-style: italic;
  opacity: 0.9;
`;
