import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.scss';
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import StaticMenu from "./components/StaticMenu";
import Instruments from "./components/Instruments";


const Favorites = () => (<div>Favorites</div>)
const NotFound = () => (<div>NotFound</div>)

class App extends Component {

    render() {

        return (
            <div className='wrapper'>
                <div className="sidebar">
                    <Logo />
                    <hr/>
                    <Menu />
                    <hr/>
                    <StaticMenu />
                </div>
                <div className="content">
                    <Switch>
                        <Route path='/instruments' component={Instruments} />
                        <Route path='/favorites' component={Favorites} />
                        <Route path='*' exact={true} component={NotFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;