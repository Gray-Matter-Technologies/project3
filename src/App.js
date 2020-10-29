import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MyDashboard from "./pages/MyDashboard";
import PostTask from "./pages/PostTask/PostTask";
import BrowseTask from "./pages/BrowseTask";
import Notification from "./pages/Notification";
import Account from "./pages/Account";
import Header from "./pages/Home/components/Header";

function App() {
  return (
    <Fragment>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mydashboard" component={MyDashboard}></Route>
            <Route path="/post-a-task" exact component={PostTask} />      
            <Route path="/account" exact component={Account} />
            <Route path="/browse-tasks" exact component={BrowseTask} />
            <Route path="/notification" exact component={Notification}/>
          </Switch>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
