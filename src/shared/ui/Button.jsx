import styled from 'styled-components';

export const Button = styled.button`
  padding: ${({ theme, size }) =>
        size === 'large' ? `${theme.spacing.md} ${theme.spacing.xl}` :
            size === 'small' ? `${theme.spacing.sm} ${theme.spacing.md}` :
                `${theme.spacing.sm} ${theme.spacing.lg}`
    };
  background-color: ${({ theme, variant }) =>
        variant === 'primary' ? theme.colors.primary :
            variant === 'secondary' ? theme.colors.secondary :
                'transparent'
    };
  color: ${({ theme }) => theme.colors.text.primary};
  border: ${({ theme, variant }) =>
        variant === 'outline' ? `2px solid ${theme.colors.primary}` : 'none'
    };
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme, size }) =>
        size === 'large' ? theme.fontSizes.lg :
            size === 'small' ? theme.fontSizes.sm :
                theme.fontSizes.md
    };
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    background-color: ${({ theme, variant }) =>
        variant === 'primary' ? '#b20710' :
            variant === 'secondary' ? theme.colors.darkGray :
                'transparent'
    };
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  }
`;
