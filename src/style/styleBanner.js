import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageLink = styled(Link)`
    text-decoration: none;
    font-family: 'Creepster', cursive;
    color: ${({ theme }) => theme.btnTextColor};
    font-size: xx-large;

    border-radius: 30px;
    margin: 40px;
    padding: 20px;
    background: ${({ theme }) => theme.btnBackgroundColor};

    @media (max-width: 768px) {
        font-size: large;
        padding: 15px;
        margin: 10px;

        &:active {
            font-size: small;
        }

        &:hover {
            font-size: medium;
        }
    }
    
    @media (max-width: 400px) {
        font-size: small;
        padding: 12px;
        margin: 8px;

        &:active {
            font-size: xx-small;
        }

        &:hover {
            font-size: x-small;
        }
    }
    
    transition: .4s ease;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

    &:hover {
        font-size: x-large;
        background: ${({ theme }) => theme.btnBackgroundHoverColor};
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    &:active {
        font-size: large;
    }
`;

export const BannerContainer = styled.div`
    margin-bottom: 50px;

    & img {
        width: 20%;
    }
    
    @media (max-width: 400px) {
        margin-bottom: 30px;
    }
`;

export const LinkContainer = styled.div`
    & #${(props) => props.activeTab === "/characters" || props.activeTab === "/" ? "tab-characters" : props.activeTab === "/locations" ? "tab-locations" : "tab-episodes"} {
        color: ${({ theme }) => theme.btnActiveTextColor};
        background-color: ${({ theme }) => theme.btnActiveBackgroundColor};
    }
`;