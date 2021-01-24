import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class TopNavbar extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <p>This is a top navbar</p>
                <Link to="/">Characters</Link>
                <Link to="/locations">Locations</Link>
                <Link to="/episodes">Episodes</Link>
            </div>
        )
    }
}
