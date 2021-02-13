import React, { Component } from 'react'
import { getEpisodes } from '../api';
import { PlainCard } from '../style/plainCardStyle';
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

    renderEpisodes() {
        const episodes = this.state.episodes.map((data) => {
            return (<PlainCard key={data.id}>
                    <span>
                        {data.episode} - <i>{data.name}</i>
                    </span>
                    <p>{data.air_date}</p>
                </PlainCard>)
            });
        return episodes;
    }

    render() {
        return (
            <div>
                {this.renderEpisodes()}
            </div>
        )
    }
}