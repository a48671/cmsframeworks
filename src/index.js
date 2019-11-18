import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const Sidebar = () => (<div>
    <div>
        <Link to='/instruments'>Instruments</Link>
    </div>
    <div>
        <Link to='/favorites'>Favorites</Link>
    </div>
</div>)
const Content = () => (<div>
    <Switch>
        <Route path='/instruments' component={Instruments} />
        <Route path='/favorites' component={Favorites} />
        <Route path='*' exact={true} component={NotFound} />
    </Switch>
</div>)
const Instruments = () => (<div>Instruments</div>)
const Favorites = () => (<div>Favorites</div>)
const NotFound = () => (<div>NotFound</div>)

const App = () => (
    <div>
        <Sidebar/>
        <Content/>
    </div>
)

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

