import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, matchPath } from 'react-router-dom';
import { debounce } from 'src/utils';
import './App.css';
import BlobResizer from 'src/BlobResizer';
import config from './config';
import BenLerchin from 'src/work/BenLerchin';
import BerfinAtaman from 'src/work/BerfinAtaman';
import BlaineOneill from 'src/work/BlaineOneill';
import ClaraLeivas from 'src/work/ClaraLeivas';
import DalenaTran from 'src/work/DalenaTran';
import ErinCooney from 'src/work/ErinCooney';
import GrahamAkins from 'src/work/GrahamAkins';
import HiradSab from 'src/work/HiradSab';
import LemingZc from 'src/work/LemingZc';
import MilesPeyton from 'src/work/MilesPeyton';
import ZeynepAbes from 'src/work/ZeynepAbes';


function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: config.style.background }}>
        <Switch>
          <Route path='/berfin-ataman'>
            <BerfinAtaman />
          </Route>
          <Route path='/ben-lerchin'>
            <BenLerchin />
          </Route>
          <Route path='/blaine-oneill'>
            <BlaineOneill />
          </Route>
          <Route path='/clara-leivas'>
            <ClaraLeivas />
          </Route>
          <Route path='/dalena-tran'>
            <DalenaTran />
          </Route>
          <Route path='/erin-cooney'>
            <ErinCooney />
          </Route>
          <Route path='/graham-akins'>
            <GrahamAkins />
          </Route>
          <Route path='/hirad-sab'>
            <HiradSab />
          </Route>
          <Route path='/leming-zc'>
            <LemingZc />
          </Route>
          <Route path='/miles-peyton'>
            <MilesPeyton />
          </Route>
          <Route path='/zeynep-abes'>
            <ZeynepAbes />
          </Route>
          <Route exact path='/'>
            <div className='title'>
              NEARREST NEIGHBOR
            </div>
          </Route>
          <Route path="*">
            Page not Found ✧・ﾟ:*
          </Route>
        </Switch>
        <div className="blobs">
          <BlobResizer />
        </div>
      </div>
    </Router>
  );
}

export default App;
