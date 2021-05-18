import React from 'react';
import Home from "./Pages/Home";
import {Route,Switch} from 'react-router-dom'
import SearchPage from "./Pages/SearchPage";

const App = () => {
    // BEM
    return (
        <div className={'app'}>

            <Switch>
                <Route path={'/search'} exact>
                    <SearchPage/>
                </Route>
                <Route path={'/'} exact>
                    <Home/>
                </Route>
            </Switch>

        </div>
    );
};

export default App;