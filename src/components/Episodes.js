import React from 'react'
import { PlainCard } from '../style/plainCardStyle';
import PropTypes from 'prop-types'
export default function Episodes({ renderData }) {

    const renderEpisodes = () => {
        const episodes = renderData.map((data) => {
            return (<PlainCard key={data.id}>
                    <span>
                        {data.episode} - <i>{data.name}</i>
                    </span>
                    <p>{data.air_date}</p>
                </PlainCard>)
            });
        return episodes;
    }
    
    return (
        <div>
            {renderEpisodes()}
        </div>
    )
    
}

Episodes.propTypes = {
    location: PropTypes.object
};