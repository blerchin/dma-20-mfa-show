import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';
import './App.css';
import BlobField from 'src/BlobField';
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

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    document.body.style.backgroundColor = config.style.background;

  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  
  render() {
    return (
      <Router>
        <div className="App" style={{ backgroundColor: config.style.background, height: window.innerHeight}}>
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
            <Route path='/'>{/* no-op */}</Route>
            <Route path="*">
              Page not Found ✧・ﾟ:*
            </Route>
          </Switch>
          <Route path="/" render={({ match }) => (
            <div className="blobs">
              <BlobField collapsed={!match.isExact} />
            </div>
          )}>
          </Route>
        </div>
      </Router>
    );
  }
}