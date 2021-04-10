import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Banner from "./components/Banner";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";
import moduleWrapper from "./components/moduleWrapper";

const URL_KEYWORD = {
  character: 'character',
  location: 'location',
  episode: 'episode'
}

const ROUTE = {
  Default: '/',
  Characters: `/${URL_KEYWORD.character}s`,
  Locations: `/${URL_KEYWORD.location}s`,
  Episodes: `/${URL_KEYWORD.episode}s`
}

const CharacterWrapper = moduleWrapper(
  Characters,
  URL_KEYWORD.character,
  ROUTE.Characters
);

const LocationWrapper = moduleWrapper(
  Locations,
  URL_KEYWORD.location,
  ROUTE.Locations
);
  
const EpisodeWrapper = moduleWrapper(
  Episodes,
  URL_KEYWORD.episode,
  ROUTE.Episodes
);

export default function Router() {
  return (
    <BrowserRouter>
          <Route path={`${ROUTE.Default}`} component={Banner} />
          <Route path={`${ROUTE.Default}`} exact component={CharacterWrapper} />
          <Route path={`${ROUTE.Characters}`} exact component={CharacterWrapper} />
          <Route path={`${ROUTE.Locations}`} exact component={LocationWrapper} />
          <Route path={`${ROUTE.Episodes}`} exact component={EpisodeWrapper} />
    </BrowserRouter>
  )
}