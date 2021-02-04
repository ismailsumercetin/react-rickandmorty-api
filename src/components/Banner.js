import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as BannerImage } from '../assets/bannerimage_2.svg'
import PropTypes from 'prop-types'

export default class Banner extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <div>
                <div>
                    <BannerImage />
                </div>
                <div>
                    <Link to="/">Characters</Link>
                    <Link to="/locations">Locations</Link>
                    <Link to="/episodes">Episodes</Link>
                </div>
            </div>
        )
    }
}


