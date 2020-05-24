import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import BlobField from 'src/BlobField';
import config from '../../config';
import Seo from 'src/Components/Seo'

import BenLerchin from '../../work/BenLerchin';
import BerfinAtaman from '../../work/BerfinAtaman';
import BlaineOneill from '../../work/BlaineOneill';
import ClaraLeivas from '../../work/ClaraLeivas';
import DalenaTran from '../../work/DalenaTran';
import ErinCooney from '../../work/ErinCooney';
import GrahamAkins from '../../work/GrahamAkins';
import HiradSab from '../../work/HiradSab';
import LemingZc from '../../work/LemingZc';
import MilesPeyton from '../../work/MilesPeyton';
import ZeynepAbes from '../../work/ZeynepAbes';

const comps = {
  BenLerchin,
  BerfinAtaman,
  BlaineOneill,
  ClaraLeivas,
  DalenaTran,
  ErinCooney,
  GrahamAkins,
  HiradSab,
  LemingZc,
  MilesPeyton,
  ZeynepAbes,
};

export default () => (
  <Router>
    <div className="app">
      <a className="sr-only" href="#main">Skip to main content</a>
      <BlobField />
      <Switch>
        {
          config.artists.map(({slug, name, component}) => {
            const Comp = comps[component];
            return (
              <Route path={`/${slug}`} key={slug}>
                <Comp slug={slug} name={name} />
              </Route>
            )
          })
        }
        <Route path='/'>
        <Seo/>
          {/* no-op */}
          </Route>
        <Route path="*">
          Page not Found ✧・ﾟ:*
        </Route>
      </Switch>
    </div>
  </Router>
);