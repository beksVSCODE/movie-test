import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ErrorContent = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border-left: 4px solid ${({ theme }) => theme.colors.error};
`;

const ErrorTitle = styled.h2`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <ErrorWrapper>
      <ErrorContent>
        <ErrorTitle>Ошибка</ErrorTitle>
        <ErrorText>{message || 'Что-то пошло не так'}</ErrorText>
      </ErrorContent>
    </ErrorWrapper>
  );
};
