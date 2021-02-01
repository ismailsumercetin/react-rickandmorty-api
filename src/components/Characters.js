import React, { Component } from 'react';
import { fetchApiUrl, getCharacters } from '../api';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default class Characters extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // };
    constructor(props){
        super(props);
        this.state = { characters: [], prev: null, next: null }

    }

    async componentDidMount() {
        const pageSearchQuery = this.props.location.search;
        const { results, info: {prev}, info: {next} } = await getCharacters(pageSearchQuery); //getting only images - for first page
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

    updateUrl = (newUrl) => {
        const url = new URL(newUrl);
        return `/characters${url.search}`;
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.prev ? <Link to={() => this.updateUrl(this.state.prev)} onClick={this.goPreviousPage}>previous</Link> : ""}
                    {this.state.next ? <Link to={() => this.updateUrl(this.state.next)} onClick={this.goNextPage}>next</Link> : ""}
                </div>
                {this.renderCharacterImages()}
            </div>
        )
    }
}
