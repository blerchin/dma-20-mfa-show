import React, { Component, Suspense, lazy } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import BlobField from 'src/BlobField';
import config from '../../config';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
        <div className="app">
          <Suspense fallback={<div />}>
            <Switch>
              {
                config.artists.map(({slug, component}) => {
                  const Comp = lazy(() => import(`../../work/${component}`));
                  return (
                    <Route path={`/${slug}`} key={slug}>
                      <Comp />
                    </Route>
                  )
                })
              }
              <Route path='/'>{/* no-op */}</Route>
              <Route path="*">
                Page not Found ✧・ﾟ:*
              </Route>
            </Switch>
          </Suspense>
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