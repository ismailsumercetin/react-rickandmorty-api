import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageLink = styled(Link)`
    text-decoration: none;
    font-family: 'Creepster', cursive;
    color: white;
    font-size: xx-large;

    border-radius: 30px;
    margin: 40px;
    padding: 20px;
    background: rgba(16, 176, 200, 0.8);

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
        background: rgba(16, 176, 200, 1);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    &:active{
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
        color: rgb(16, 176, 200);
        background: rgb(195,217,70);
    }
`;