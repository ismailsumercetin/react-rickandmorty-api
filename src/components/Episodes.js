import React, { Component } from 'react'
import { getEpisodes } from '../api';
import PropTypes from 'prop-types'

export default class Episodes extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    constructor(props){
        super(props);
        this.state = { episodes: [] }
    }

    async componentDidMount(){
        const { results } = await getEpisodes(); //getting only images - for first page
        this.setState({ episodes: results });
    }

    renderEpisodeNames() {
        const names = this.state.episodes.map((data) => { return <div key={data.id}> {data.name} </div> });
        return names;
    }

    render() {
        return (
            <div>
                {this.renderEpisodeNames()}
            </div>
        )
    }
}