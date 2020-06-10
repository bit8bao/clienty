import styles from './LeftNavigation.module.scss';

import React from 'react';
import { connect } from 'react-redux';
import { ReduxProps } from '../../../Models/ReduxProps';
import IStore from '../../../Models/IStore';
import INavigation from '../../../Selector/Navigation/Models/INavigation';
import iconsTopNav from '../../Components/Icons/_iconsTopNav';
import {getTopNavigation} from '../../../Selector/Navigation/NavigationSelector';
import Text, { TextSizeEnum } from '../../Components/Text/Text';

import classNames from "classnames";
import {Link} from "react-router-dom";


interface IProps {}
interface IState {}
interface IStateToProps {
  readonly topLevels: INavigation[];
}

const mapStateToProps = (state: IStore, ownProps: IProps): IStateToProps => ({
  topLevels: getTopNavigation(state),
});

class LeftNavigation extends React.Component<IProps & IStateToProps & ReduxProps<any>, IState> {
  public render(): JSX.Element {
    return (
      <ul className={styles.wrapper}>
        {this.props.topLevels.map((model: INavigation) => {
          const cssClasses: string = classNames({
            [styles.btn]: true,
            [styles.isActive]: model.isActive,
          });
          const Icon: any = iconsTopNav[model.icon] || iconsTopNav.Default;

          return (
              <li key={model.name} id={model.name}>
                <Link to={model.url} className={cssClasses}>
                  <Icon className={styles.icon} />
                  <Text size={TextSizeEnum.Caption2} dataAutomation={model.name}>
                    {model.name}
                  </Text>
                </Link>
              </li>
          );
        })}
      </ul>
    );
  }
}

export { LeftNavigation as Unconnected };
export default connect(mapStateToProps)(LeftNavigation);
