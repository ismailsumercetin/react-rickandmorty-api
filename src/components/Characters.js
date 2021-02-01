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
        const data = await getCharacters(pageSearchQuery); //getting only images - for first page
        
        if (!data.error){
            const { results, info: {prev}, info: {next} } = data;
            this.updateStates(results, prev, next);
        }
    }

    renderCharacterImages() {
        let images;
        
        this.state.characters.length ? 
            images = this.state.characters.map((data) => { return <img key={data.id} src={data.image}/> }) :
            images = (<div>There's nothing to show</div>);
        
        return images;
    }

    changePage = async (url) => {
        const { results, info: {prev}, info: {next} } = await fetchApiUrl(url);
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
                    {this.state.prev ?
                                    <Link to={() => this.updateUrl(this.state.prev)}
                                     onClick={() => this.changePage(this.state.prev)}>Previous</Link>
                                    : ""}
                    {this.state.next ?
                                    <Link to={() => this.updateUrl(this.state.next)}
                                    onClick={() => this.changePage(this.state.next)}>Next</Link>
                                    : ""}
                </div>
                {this.renderCharacterImages()}
            </div>
        )
    }
}