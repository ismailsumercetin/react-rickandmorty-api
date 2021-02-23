import React from 'react';
import { fetchApiUrl } from '../api';
import NavigationLinkButton from './NavigationLinkButton';

const LOCATION = {
    RIGHT : 'right',
    LEFT : 'left'
}

const ALT = {
    Prev : 'Previous',
    Next : 'Next'
}

// HOC
export default function moduleWrapper(WrappedComponent, getAPIData, updateUrlSlug) {
    return class extends React.Component {

        constructor(props) {
            super(props);
            this.state = { data: [], prev: null, next: null }
        }

        async componentDidMount(){
            const pageSearchQuery = this.props.location.search;
            const APIData = await getAPIData(pageSearchQuery);
            
            if (!APIData.error) {
                const { results, info: {prev}, info: {next} } = APIData;
                this.updateStates(results, prev, next);
            }
        }

        updateStates = (results, prev, next) => {
            this.setState({ data: results, prev, next });
        }
    
        changePage = async (url) => {
            const { results, info: {prev}, info: {next} } = await fetchApiUrl(url);
            this.updateStates(results, prev, next);
        }

        updateUrl = (newUrl) => {
            const url = new URL(newUrl);
            return `/${updateUrlSlug + url.search}`;
        }

        render() {
            return (
                <>
                    {this.state.prev ? (
                        <NavigationLinkButton location={LOCATION.LEFT}
                        to={ () => this.updateUrl(this.state.prev) } 
                        changePage={ () => this.changePage(this.state.prev) }
                        alt={ALT.Prev} />
                        )
                    : ""}
                    {this.state.next ? (
                        <NavigationLinkButton location={LOCATION.RIGHT}
                        to={ () => this.updateUrl(this.state.next) } 
                        changePage={ () => this.changePage(this.state.next) }
                        alt={ALT.Next} />
                        )
                    : ""}
                    <WrappedComponent renderData={this.state.data} />
                </>
            );
        }
        
    }
}
