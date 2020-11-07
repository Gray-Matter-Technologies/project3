import React, {Component, Fragment } from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import MyDashboard from "./pages/MyDashboard";
import PostTask from "./pages/PostTask/PostTask";
import BrowseTask from "./pages/BrowseTask";
import Notification from "./pages/Notification";
import Account from "./pages/Account";
import Auth from './components/Auth/Auth'
import Map from './pages/Map'

import Header from "./pages/Home/components/Header";


class App extends React.Component{


  
  render(){
  return (
    <Fragment>
        <GlobalStyle />
        <Auth>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/map" exact component={Map}/>
            <Route path="/mydashboard" component={MyDashboard}></Route>
            <Route path="/post-a-task" exact component={PostTask} />
            <Route path="/account" exact component={Account} />
            <Route path="/browse-tasks" exact component={BrowseTask} />
            <Route path="/notification" exact component={Notification}/>
          </Switch>
        </BrowserRouter>
        </Auth>
    </Fragment>
  );
  }
}

export default App;
