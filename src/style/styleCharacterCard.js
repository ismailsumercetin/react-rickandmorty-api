import styled from 'styled-components';

export const CharacterCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const CharacterCard = styled.div`
    position: relative;
    margin: 0.75rem;
`;

export const CharacterCardImage = styled.img`
    width: 100%;
    -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow:    0px 2px 10px 0px rgba(0, 0, 0, 0.4);
    box-shadow:         0px 2px 10px 0px rgba(0, 0, 0, 0.4);
`;

export const ContentWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 0;
    background-color: rgba(60, 62, 68, 0.8);
    overflow: hidden;
    height: 98.8%;
    margin-bottom: 4px;

    transition: .8s ease, .8s color ease;
    transition-delay: .6s, 0s;
    
    font-family: 'Raleway', sans-serif;
    color: transparent;

    margin-top: 20px;

    & .content-item {
        margin-top: 16px;
    }

    & .content-item:nth-child(1) {
        margin-top: 35px;
    }
    
    ${CharacterCard}:hover & {
        width: 100%;
        color: white;
        transition-delay: 0s, .8s;
    }
`;

export const StatusDot = styled.span`
    display: inline-block;
    height: .8rem;
    width: .8rem;
    
    background: none;
    border-radius: 50%;

    transition: .8s background ease;
    
    ${CharacterCard}:hover & {
        background: ${(props) => (props.isAlive === "Alive" ? "rgb(85, 204, 68)" : "rgb(214, 61, 46)")};
        transition-delay: .8s;
    }
`;

export const GenderIconWrapper = styled.span`
    & .gender-icon {
        opacity: 0;
        fill: white;
        transition: .8s ease;
    }

    ${CharacterCard}:hover & .gender-icon {
        opacity: 1;
        transition-delay: .8s;
    }
`;