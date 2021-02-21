import React from 'react'
import { NavigationLink } from '../style/styleCharacters';
import PageButton from '../assets/portal.png';
import PropTypes from 'prop-types'

export default function NavigationLinkButton({ location, to, changePage, alt }) {
    return (
        <NavigationLink $location={location} to={to}
            onClick={changePage}>
                <img src={PageButton} alt={alt} />
                <span>{alt}</span>
        </NavigationLink>
    )
}

NavigationLinkButton.propTypes = {
    location: PropTypes.string,
    to: PropTypes.func,
    changePage: PropTypes.func,
    alt: PropTypes.string
};