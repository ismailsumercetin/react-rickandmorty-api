import styled from 'styled-components';

export const PlainCard = styled.div`
    padding: 15px;
    width: 350px;
    margin: 0 auto;
    margin-bottom: 15px;

    border-radius: 12px;
    color: white;
    background-color: rgba(16,176,200,1);
    transition: .8s ease;

    -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow:    0px 2px 10px 0px rgba(0, 0, 0, 0.4);
    box-shadow:         0px 2px 10px 0px rgba(0, 0, 0, 0.4);
    
    & > span {
        font-size: 26px;
    }

    & i {
        font-size: 22px;
        font-weight: bold;
    }

    & p {
        margin-top: 10px;
    }

    &:hover {
        color: rgb(16, 176, 200);
        background-color: rgb(195,217,70);
    }
`;