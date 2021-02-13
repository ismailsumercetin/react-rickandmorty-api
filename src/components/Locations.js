import React, { Component } from 'react'
import { getLocations } from '../api';
import { PlainCard } from '../style/plainCardStyle';
import PropTypes from 'prop-types'

export default class Locations extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    constructor(props){
        super(props);
        this.state = { locations: [] }
    }

    async componentDidMount(){
        const { results } = await getLocations(); //getting only images - for first page
        this.setState({ locations: results });
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
                {this.renderLocations()}
            </div>
        )
    }
}
