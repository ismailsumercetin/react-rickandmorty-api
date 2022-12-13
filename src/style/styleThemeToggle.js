import styled from 'styled-components';

export const ThemeToggleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    width: 56px;
    height: 52px;
    padding-top: 6px;

    transition: .8s ease;
    background-color: ${({ theme }) => theme.themeToggleBgColor};
    border-radius: 12px;

    box-shadow: 0px 1px 27px 0px rgba(0,0,0,0.52);
    -webkit-box-shadow: 0px 1px 27px 0px rgba(0,0,0,0.52);
    -moz-box-shadow: 0px 1px 27px 0px rgba(0,0,0,0.52);

    position: fixed;
    right: 20px;
    bottom: 20px;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.themeToggleHoverBgColor};
    }
`;