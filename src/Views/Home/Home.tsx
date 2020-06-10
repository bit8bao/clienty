import styles from './Home.module.scss';

import React from 'react';
import {connect} from 'react-redux';
import IStore from "../../Models/IStore";
import {ReduxProps} from "../../Models/ReduxProps";
import Page from "../Components/Page/Page";

interface IProps {}
interface IState {}
interface IRouteParams {}
interface IStateToProps {}

const mapStateToProps = (state: IStore, ownProps: IProps): IStateToProps => ({});

class Home extends React.Component<IProps & IStateToProps & ReduxProps<any>, IState> {

  // public static defaultProps: IProps = {};
  // public state: IState = {};

  public render(): JSX.Element {

      return (
          // @ts-ignore
          <Page title="HomePage">
            <div className={styles.wrapper}>
                Home
            </div>
        </Page>
    );
  }

}

export { Home as Unconnected };
export default connect(mapStateToProps)(Home);
