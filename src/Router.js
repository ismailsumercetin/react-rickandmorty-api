import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Banner from "./components/Banner";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";
import moduleWrapper from "./components/moduleWrapper";

import { getCharacters, getEpisodes, getLocations } from './api';

const URL_SLUGS = {
  Characters : 'characters',
  Locations : 'locations',
  Episodes : 'episodes'
}

const CharacterWrapper = moduleWrapper(
  Characters,
  getCharacters,
  URL_SLUGS.Characters
);

const LocationWrapper = moduleWrapper(
  Locations,
  getLocations,
  URL_SLUGS.Locations
);
  
const EpisodeWrapper = moduleWrapper(
  Episodes,
  getEpisodes,
  URL_SLUGS.Episodes
);

export default function Router() {
  return (
    <BrowserRouter>
          <Route path="/" component={Banner} />
          <Route path="/" exact component={CharacterWrapper} />
          <Route path="/characters" exact component={CharacterWrapper} />
          <Route path="/locations" exact component={LocationWrapper} />
          <Route path="/episodes" exact component={EpisodeWrapper} />
    </BrowserRouter>
  )
}