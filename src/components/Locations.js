import React, { Component } from 'react'
import { getLocations } from '../api';
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

    renderLocationNames() {
        const names = this.state.locations.map((data) => { return <div key={data.id}> {data.name} </div> });
        return names;
    }

    render() {
        return (
            <div>
                {this.renderLocationNames()}
            </div>
        )
    }
}
