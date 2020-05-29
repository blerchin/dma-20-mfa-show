import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import BlobField from 'src/BlobField';
import Info from 'src/Containers/Info';
import config from '../../config';
import Seo from 'src/Components/Seo'
import Nav from '../../Components/Nav';
import ScrollToTop from 'src/Components/ScrollToTop';
import NotFound from 'src/Containers/NotFound';

import BenLerchin from '../../work/BenLerchin';
import BerfinAtaman from '../../work/BerfinAtaman';
import BlaineOneill from '../../work/BlaineOneill';
import ClaraLeivas from '../../work/ClaraLeivas';
import DalenaTran from '../../work/DalenaTran';
import ErinCooney from '../../work/ErinCooney';
import GrahamAkins from '../../work/GrahamAkins';
import HiradSab from '../../work/HiradSab';
import LemingZhong from '../../work/LemingZhong';
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
  LemingZhong,
  MilesPeyton,
  ZeynepAbes,
};

export default () => (
  <Router>
    <ScrollToTop />
    <div className="app">
      <a className="sr-only" href="#main">Skip to main content</a>
      <BlobField />
      <Nav />
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
        <Route path='/' exact>
          <Seo/>
          {/* no-op */}
        </Route>
        <Route path='/info'>
          <Info />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  </Router>
);