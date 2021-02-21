const BASE_URL = new URL("https://rickandmortyapi.com/api/");
const URLS = {
    characters: new URL("character",BASE_URL),
    locations: new URL("location",BASE_URL),
    episodes: new URL("episode",BASE_URL),
}

export const getCharacters = async (pageQuery) => {
    let newURL;
    
    pageQuery ? newURL = new URL(pageQuery, URLS.characters) : newURL = URLS.characters;

    const data = await fetch(newURL)
        .then(res => res.json());

    return data;
}

export const getLocations = async (pageQuery) => {
    let newURL;
    
    pageQuery ? newURL = new URL(pageQuery, URLS.locations) : newURL = URLS.locations;

    const data = await fetch(newURL)
        .then(res => res.json());

    return data;
}

export const getEpisodes = async (pageQuery) => {
    let newURL;
    
    pageQuery ? newURL = new URL(pageQuery, URLS.episodes) : newURL = URLS.episodes;
    
    const data = await fetch(newURL)
        .then(res => res.json());

    return data;
}

export const fetchApiUrl = async (url) => {
    const data = await fetch(url)
        .then(res => res.json());

    return data;
}