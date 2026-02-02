import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

export const MovieCardWrapper = styled.div`
  background: linear-gradient(145deg, rgba(47, 47, 47, 0.9), rgba(31, 31, 31, 0.95));
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3),
              0 0 1px rgba(229, 9, 20, 0.2);
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(229, 9, 20, 0.1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent,
      rgba(229, 9, 20, 0.1),
      transparent
    );
    background-size: 200% 200%;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 16px 48px rgba(229, 9, 20, 0.3),
                0 0 20px rgba(229, 9, 20, 0.2);
    border-color: rgba(229, 9, 20, 0.4);

    &::before {
      opacity: 1;
      animation: ${shine} 2s linear infinite;
    }
  }
`;

export const PosterWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 150%; /* Соотношение сторон 2:3 для постера */
  overflow: hidden;
  background: linear-gradient(135deg, rgba(86, 77, 77, 0.5), rgba(47, 47, 47, 0.5));
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
    pointer-events: none;
  }
`;

export const Poster = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${MovieCardWrapper}:hover & {
    transform: scale(1.1);
  }
`;

export const Rating = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 20, 0.95));
  padding: 0.4rem 0.7rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.rating};
  font-size: 0.9rem;
  border: 1.5px solid rgba(255, 215, 0, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5),
              0 0 10px rgba(255, 215, 0, 0.2);
  backdrop-filter: blur(10px);
  z-index: 2;
  transition: all 0.3s ease;
  
  ${MovieCardWrapper}:hover & {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6),
                0 0 20px rgba(255, 215, 0, 0.4);
  }
`;

export const ContentWrapper = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));
  position: relative;
  z-index: 1;
`;

export const Title = styled.h3`
  font-size: 1.05rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  transition: color 0.3s ease;
  
  ${MovieCardWrapper}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ReleaseDate = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 500;
  opacity: 0.9;
`;

export const Overview = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.6;
  opacity: 0.85;
`;
