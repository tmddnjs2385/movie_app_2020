import React from 'react';
import { HashRouter, Route, Router } from "react-router-dom";
import About from "./routes/About.js";
import Home from "./routes/Home.js";
import Navigation from "./Components/Navigation";

function App() {
  return (

    // brower router 보다 hash router가 git-hub에 page 연동하는 것이 쉽다. 
    // NAvaigation은 항상 Router 안에 있어야 한다. 그래야 작동한다.  밖에 있으면 작동하지 않는다. 

    <HashRouter>

      <Navigation />

      <Route path="/" exact={true} component={Home} />

      <Route path="/about" component={About} />

    </HashRouter>

  );
};

export default App;
