const BASE_URL = new URL("https://rickandmortyapi.com/api/");

export const getData = async (pageQuery, slug) => {
    let fetchUrl;
    const slugUrl = new URL(slug, BASE_URL);

    pageQuery ? fetchUrl = new URL(pageQuery, slugUrl) : fetchUrl = slugUrl;

    const data = await fetch(fetchUrl)
        .then(res => res.json());

    return data;
}

export const fetchApiUrl = async (url) => {
    const data = await fetch(url)
        .then(res => res.json());

    return data;
}