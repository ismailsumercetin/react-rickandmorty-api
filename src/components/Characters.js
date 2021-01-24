import React, { Component } from 'react';
import { getCharacters } from '../api';
import PropTypes from 'prop-types';

export default class Characters extends Component {
    static propTypes = {
        prop: PropTypes
    };

    async componentDidMount(){
        const characters = await getCharacters();
        console.log(characters);
        
    }

    render() {
        return (
            <div>
                Characters page
            </div>
        )
    }
}
