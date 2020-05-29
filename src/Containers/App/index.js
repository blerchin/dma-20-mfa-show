import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../Components/Theme/theme";
import { GlobalStyles } from "../../Components/Theme/global";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import BlobField from "src/BlobField";
import config from "../../config";
import Seo from "src/Components/Seo";
import Nav from "../../Components/Nav";
import ScrollToTop from "src/Components/ScrollToTop";
import NotFound from "src/Containers/NotFound";

import BenLerchin from "../../work/BenLerchin";
import BerfinAtaman from "../../work/BerfinAtaman";
import BlaineOneill from "../../work/BlaineOneill";
import ClaraLeivas from "../../work/ClaraLeivas";
import DalenaTran from "../../work/DalenaTran";
import ErinCooney from "../../work/ErinCooney";
import GrahamAkins from "../../work/GrahamAkins";
import HiradSab from "../../work/HiradSab";
import LemingZc from "../../work/LemingZc";
import MilesPeyton from "../../work/MilesPeyton";
import ZeynepAbes from "../../work/ZeynepAbes";

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

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
      </>
      <Router>
        <ScrollToTop />
        <div className="app">
          <a className="sr-only" href="#main">
            Skip to main content
          </a>
          <button onClick={toggleTheme}>Toggle theme</button>
          <BlobField />
          <Nav />
          <Switch>
            {config.artists.map(({ slug, name, component }) => {
              const Comp = comps[component];
              return (
                <Route path={`/${slug}`} key={slug}>
                  <Comp slug={slug} name={name} />
                </Route>
              );
            })}
            <Route path="/" exact>
              <Seo />
              {/* no-op */}
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
