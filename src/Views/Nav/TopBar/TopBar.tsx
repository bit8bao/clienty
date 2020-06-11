import styles from './TopBar.module.scss';

import React from 'react';
import { connect } from 'react-redux';
import { ReduxProps } from '../../../Models/ReduxProps';
import IStore from '../../../Models/IStore';
import IBreadcrumb from '../../../Models/IBreadcrumbs';
import HorizontalDivider from '../../Components/HorizontalDivider/HorizontalDivider';

interface IProps {
  readonly breadcrumbs?: IBreadcrumb[];
}
interface IState {}
// interface IRouteParams {}
interface IStateToProps {}

const mapStateToProps = (state: IStore, ownProps: IProps): IStateToProps => ({});

class TopBar extends React.Component<IProps & IStateToProps & ReduxProps<any>, IState> {
  public render(): JSX.Element {
    const componentName: string = 'TopBar';

    return (
      <>
        <div className={styles.wrapper} data-automation={componentName}>
          <div className={styles.rightSide}>
            <div className="hr_3" />
          </div>
        </div>
        <HorizontalDivider />
      </>
    );
  }
}

export { TopBar as Unconnected };
export default connect(mapStateToProps)(TopBar);
