import React from 'react';
// import './route.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from '../firebase';

import Head from './head_02';
import Eat from './eat';
import UploadMeat from './upload_meat';
import Done from './done';
import Login from './login';
import SignUp from './signup';

import Auth from '../Auth';

class RouteFarmers extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={Head} />
                    <Route exact path="/eat" component={Eat} /> */}
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    {/* 以下認証のみ */}
                    <Auth>
                        <Switch>
                            <Route exact path="/" component={UploadMeat} />
                            <Route exact path="/done" component={Done} />
                            <Route render={() => <p>not found.</p>} />
                        </Switch>
                    </Auth>
                </Switch>
            </Router>
        );
    }
}

export default RouteFarmers;