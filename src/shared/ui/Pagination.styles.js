import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

export const PageButton = styled.button.withConfig({
    shouldForwardProp: (prop) => !prop.startsWith('$'),
})`
  min-width: 40px;
  height: 40px;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme, $active }) =>
        $active ? theme.colors.primary : theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme, $active }) =>
        $active ? theme.colors.primary : theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme, $active }) =>
        $active ? theme.fontWeights.bold : theme.fontWeights.regular};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover:not(:disabled) {
    background-color: ${({ theme, $active }) =>
        $active ? '#b20710' : theme.colors.secondary};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 35px;
    height: 35px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const PageInfo = styled.span`
  padding: 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const Ellipsis = styled.span`
  padding: 0 ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
