import React, { Component } from 'react';
import { fetchApiUrl, getCharacters } from '../api';
// import PropTypes from 'prop-types';

export default class Characters extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // };
    constructor(props){
        super(props);
        this.state = { characters: [], prev: null, next: null }
    }

    async componentDidMount(){
        const { results, info: {prev}, info: {next} } = await getCharacters(); //getting only images - for first page
        this.updateStates(results, prev, next);
    }

    renderCharacterImages() {
        const images = this.state.characters.map((data) => { return <img key={data.id} src={data.image}/> });
        return images;
    }

    goNextPage = async () => {
        const { results, info: {prev}, info: {next} } = await fetchApiUrl(this.state.next);
        this.updateStates(results, prev, next);
    }

    goPreviousPage = async () => {
        const { results, info: {prev}, info: {next} } = await fetchApiUrl(this.state.prev);
        this.updateStates(results, prev, next);
    }

    updateStates = (characters, prev, next) => {
        this.setState({ characters, prev, next });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.prev ? <button onClick={this.goPreviousPage}>Go Previous Page</button> : ""}
                    {this.state.next ? <button onClick={this.goNextPage}>Go Next Page</button> : ""}
                </div>
                {this.renderCharacterImages()}
            </div>
        )
    }
}
