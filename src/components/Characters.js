import React, { Component } from 'react';
import { getCharacters } from '../api';
// import PropTypes from 'prop-types';

export default class Characters extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // };
    constructor(props){
        super(props);
        this.state = { characters: [] }
    }

    async componentDidMount(){
        const { results } = await getCharacters(); //getting only images - for first page
        this.setState({ characters: results });
    }

    renderCharacterImages() {
        const images = this.state.characters.map((data) => { return <img src={data.image}/> });
        return images;
    }

    render() {
        return (
            <div>
                {this.renderCharacterImages()}
            </div>
        )
    }
}
