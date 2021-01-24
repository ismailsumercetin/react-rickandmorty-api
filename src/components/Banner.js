import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as BannerImage } from '../assets/bannerimage.svg'
import PropTypes from 'prop-types'

export default class Banner extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <div>
                <section>
                    <BannerImage />
                </section>
                <section>
                    <Link to="/">Characters</Link>
                    <Link to="/locations">Locations</Link>
                    <Link to="/episodes">Episodes</Link>
                </section>
            </div>
        )
    }
}


