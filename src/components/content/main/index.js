// @flow

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import './style.styl';

import MessageGroupInbox from '../../../routes/messages-inbox';
import MessageGroupSent from '../../../routes/messages-sent';
import MessageGroupSpam from '../../../routes/messages-spam';
import MessageGroupTrash from '../../../routes/messages-trash';
import PageNotFound from '../../../routes/page-not-found/index';

const Main = () => (
    <main className="main">
        <Switch>
            <Route exact={true} path="/" render={() => <Redirect to="/inbox"/>}/>
            <Route path="/inbox" component={MessageGroupInbox}/>
            <Route path="/sent" component={MessageGroupSent}/>
            <Route path="/spam" component={MessageGroupSpam}/>
            <Route path="/trash" component={MessageGroupTrash}/>
            <Route component={PageNotFound}/>
        </Switch>
    </main>
);

export default Main;
