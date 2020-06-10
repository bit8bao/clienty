import React, { Suspense, lazy } from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import {Route, Router, Switch} from 'react-router-dom';
import IAction from '../Models/IAction';
import { Dispatch } from 'redux';
import './App.scss';
import Home from './Home/Home'

interface IProps {
  readonly history: History;
  readonly dispatch: Dispatch<IAction<any>>;
}
interface IState {}

export default class App extends React.Component<IProps, IState> {

  public render(): JSX.Element {
    return (
        <ConnectedRouter history={this.props.history}>
            <Switch>
                <Route sensitive={false} exact={true} path={'/'} component={Home} />
            </Switch>
        </ConnectedRouter>
        )
  }
}

