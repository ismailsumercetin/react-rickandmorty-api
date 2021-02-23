import React from 'react';
import { 
    CharacterCard, 
    CharacterCardWrapper, 
    ContentWrapper,
    CharacterCardImage,
    StatusDot, 
    GenderIconWrapper} from '../style/styleCharacters';
 
import { ReactComponent as MaleIcon } from '../assets/gender_icon_male.svg';
import { ReactComponent as FemaleIcon } from '../assets/gender_icon_female.svg';

import PropTypes from 'prop-types';

export default function Characters({ renderData }) {

    const renderCharacters = () => {
        let images;
        
        renderData.length ? 
            images = renderData.map(
                (data) => { return (<CharacterCard key={data.id}>
                    <CharacterCardImage src={data.image}/>
                        <ContentWrapper>
                            <div className="content-item">
                                <h2>{data.name}</h2>
                            </div>
                            <div className="content-item">
                                <GenderIconWrapper>{data.gender === "Male" ? <MaleIcon className="gender-icon" /> : data.gender === "Female" ? <FemaleIcon className="gender-icon" /> : ""}</GenderIconWrapper>
                            </div>
                            <div className="content-item">
                                <StatusDot isAlive={data.status} /> {data.status} - {data.species} 
                            </div>
                            {data.type.length ? <div>Type: {data.type}</div>  : ""}
                            <div className="content-item">
                                Last known location: {data.location.name}
                            </div>
                            <div className="content-item">
                                First seen in: {data.origin.name}
                            </div>
                        </ContentWrapper>
                    </CharacterCard>) }
                ) :
            images = "";
        return images;
    }
    
    return (
        <>
            <CharacterCardWrapper>
                {renderCharacters()}
            </CharacterCardWrapper>
        </>
    )
    
}

Characters.propTypes = {
    location: PropTypes.object
};