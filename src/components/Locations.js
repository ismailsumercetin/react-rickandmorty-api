import React from 'react'
import { PlainCard } from '../style/plainCardStyle';
import PropTypes from 'prop-types'
export default function Locations({ renderData }) {

    const renderLocations = () => {
        const locations = renderData.map((data) => {
            return (<PlainCard key={data.id}>
                    <span>
                        {data.name} - <i>{data.dimension}</i>
                    </span>
                    <p>{data.type}</p>
                </PlainCard>)
            });
        return locations;
    }

    return (
        <div>
            {renderLocations()}
        </div>
    )
    
}

Locations.propTypes = {
    location: PropTypes.object
};