import React, { Component } from 'react'
import { fetchApiUrl, getLocations } from '../api';
import { PlainCard } from '../style/plainCardStyle';
import NavigationLinkButton from './NavigationLinkButton';
// import PropTypes from 'prop-types'

export default class Locations extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    constructor(props){
        super(props);
        this.state = { locations: [], prev: null, next: null }
    }

    async componentDidMount(){
        const pageSearchQuery = this.props.location.search;
        const data = await getLocations(pageSearchQuery);
        
        if (!data.error) {
            const { results, info: {prev}, info: {next} } = data;
            this.updateStates(results, prev, next);
        }
    }

    changePage = async (url) => {
        const { results, info: {prev}, info: {next} } = await fetchApiUrl(url);
        this.updateStates(results, prev, next);
    }

    updateStates = (locations, prev, next) => {
        this.setState({ locations, prev, next });
    }

    updateUrl = (newUrl) => {
        const url = new URL(newUrl);
        return `/locations${url.search}`;
    }

    renderLocations() {
        const locations = this.state.locations.map((data) => {
            return (<PlainCard key={data.id}>
                    <span>
                        {data.name} - <i>{data.dimension}</i>
                    </span>
                    <p>{data.type}</p>
                </PlainCard>)
            });
        return locations;
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
                {this.renderLocations()}
            </div>
        )
    }
}
