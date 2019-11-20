import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './app.scss';
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import StaticMenu from "./components/StaticMenu";
import Instruments from "./components/Instruments";
import Favorites from "./components/Favorites";
import Loader from "./components/Loader";
import {setFavorites, setInstrument} from "./store/actions/instruments";
import {getInstruments} from "./helpers";

const NotFound = () => (<div>NotFound</div>)

class App extends Component {

    state = {
        isLoading: true
    };

    render() {

        const { isLoading } = this.state;

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
                {isLoading && <Loader />}
            </div>
        );
    }

    componentDidMount() {
        const { setInstrument, instruments } = this.props;
        if(!Boolean(instruments)) {
            getInstruments(1)
                .then(response => {
                    const instruments = response.data;
                    setInstrument(instruments);
                    this.setState({isLoading: false});
                }).catch(error => console.log(error));
        }
        const favorites = window.localStorage.getItem('favorites');
        if (favorites) {
            this.props.setFavorites(JSON.parse(favorites));
        }
    }
}

const mapDispatchToProps = dispatch => ({
    setInstrument: instrument => dispatch(setInstrument(instrument)),
    setFavorites: favorites => dispatch(setFavorites(favorites))
});

export default connect(null, mapDispatchToProps)(App);