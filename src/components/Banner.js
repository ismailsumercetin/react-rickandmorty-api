import React, { Component } from 'react'
import { ReactComponent as BannerImage } from '../assets/bannerimage.svg'
import Rick from '../assets/rick_animation.gif'
import Morty from '../assets/morty_animation.gif'
import PropTypes from 'prop-types'
import { PageLink, BannerContainer, LinkContainer } from '../style/styleBanner'

export default class Banner extends Component {
    
    constructor(props){
        super(props);
        this.state = { activeTab: "" }
    }

    componentDidMount() {
        this.setState({ activeTab: this.props.location.pathname });
    }

    componentDidUpdate() {
        if (this.props.location.pathname !== this.state.activeTab) {
            this.setState({ activeTab: this.props.location.pathname });
        }
    }

    render() {
        return (
            <BannerContainer>
                <BannerContainer>
                    <img src={Rick} alt="rick" />
                    <BannerImage style={{ stroke: "black", strokeWidth: "3px"}} />
                    <img src={Morty} alt="morty" />
                </BannerContainer>
                <LinkContainer activeTab={this.state.activeTab}>
                    <PageLink id="tab-characters" to="/">Characters</PageLink>
                    <PageLink id="tab-locations" to="/locations">Locations</PageLink>
                    <PageLink id="tab-episodes" to="/episodes">Episodes</PageLink>
                </LinkContainer>
            </BannerContainer>
        )
    }
}

Banner.propTypes = {
    location: PropTypes.object
};