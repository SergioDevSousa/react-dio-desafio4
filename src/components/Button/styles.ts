import styled from 'styled-components';


export const ButtonContainer = styled.button<{$isDisabled?: boolean}>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
    border-radius: 21px;
    opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
    transition: all 0.3s ease;

    &:hover {
        background: ${({ $isDisabled }) => !$isDisabled && "#81259D"};
        cursor:pointer;
    }
`