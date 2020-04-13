import React from 'react';
import Header from "./components/header/Header";
import {Route, Switch} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Create from "./Pages/Create";

class  App extends React.Component{
    state={
        isOpen: false
    };

    menuList = [
        {link: '/', title: 'Home'},
        {link: 'about', title: 'About'},
        {link: 'Login', title: 'Login'},
        {link: 'create', title: 'Create'},
    ];

    openCloseMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen

        })
    };

  render() {


      return (
          <div>
              <Header
                  openCloseMenu={this.openCloseMenu}
                  isOpen={this.state.isOpen}
                  menuList={this.menuList}
              />

              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/about' component={About} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/create' component={Create}/>
              </Switch>



          </div>
      );
  }


}

export default App;
