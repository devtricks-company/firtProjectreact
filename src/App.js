import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

import Search from "./components/users/Search";
import Alert from './components/layout/Alert';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from "./pages/About";
import User from './components/users/User';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {

    return (
      <Router>
      <div className="App">
      
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container mt-5">
        <Switch>
           <Route exact path='/' component={Home} />

           <Route exact path="/about" component={About} />

            <Route exact path="/user/:login" component={User} />
           <Route component={NotFound} />

        </Switch>
        </div>
      </div>
      </Router>
    );
  
}

export default App;
