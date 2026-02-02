import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: linear-gradient(
    -45deg,
    rgba(20, 20, 20, 1),
    rgba(31, 31, 31, 1),
    rgba(20, 20, 20, 1),
    rgba(25, 25, 25, 1)
  );
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 300px;
    background: radial-gradient(
      ellipse at top,
      rgba(229, 9, 20, 0.15),
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const PageTitle = styled.h1`
  text-align: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    #ff4757,
    #ffd700
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  filter: drop-shadow(0 4px 12px rgba(229, 9, 20, 0.3));
  letter-spacing: -1px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const MoviesCount = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.05rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 600;
  background: linear-gradient(135deg, rgba(229, 9, 20, 0.1), rgba(255, 71, 87, 0.1));
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: 1px solid rgba(229, 9, 20, 0.2);
  margin-left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;
