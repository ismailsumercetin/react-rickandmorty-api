import React, { Component } from 'react'
import { fetchApiUrl, getEpisodes } from '../api';
import { PlainCard } from '../style/plainCardStyle';
import NavigationLinkButton from './NavigationLinkButton';
import PropTypes from 'prop-types'

export default class Episodes extends Component {

    constructor(props){
        super(props);
        this.state = { episodes: [], prev: null, next: null }
    }

    async componentDidMount(){
        const pageSearchQuery = this.props.location.search;
        const data = await getEpisodes(pageSearchQuery);
        
        if (!data.error) {
            const { results, info: {prev}, info: {next} } = data;
            this.updateStates(results, prev, next);
        }
    }

    changePage = async (url) => {
        const { results, info: {prev}, info: {next} } = await fetchApiUrl(url);
        this.updateStates(results, prev, next);
    }

    updateStates = (episodes, prev, next) => {
        this.setState({ episodes, prev, next });
    }

    updateUrl = (newUrl) => {
        const url = new URL(newUrl);
        return `/episodes${url.search}`;
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
                {this.state.prev ? (
                    <NavigationLinkButton location={"left"}
                     to={ () => this.updateUrl(this.state.prev) } 
                     changePage={ () => this.changePage(this.state.prev) }
                     alt={"Previous"} />
                    )
                : ""}
                {this.state.next ? (
                    <NavigationLinkButton location={"right"}
                     to={ () => this.updateUrl(this.state.next) } 
                     changePage={ () => this.changePage(this.state.next) }
                     alt={"Next"} />
                    )
                : ""}
                {this.renderEpisodes()}
            </div>
        )
    }
}

Episodes.propTypes = {
    location: PropTypes.object
};