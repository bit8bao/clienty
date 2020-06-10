import styles from './Page.module.scss';

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Text, { TextSizeEnum } from '../Text/Text';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { ReduxProps } from '../../../Models/ReduxProps';
import IStore from '../../../Models/IStore';
import { connect } from 'react-redux';
import IBreadcrumb from '../../../Models/IBreadcrumbs';
import MetaAction from '../../../Stores/Meta/MetaAction';

interface IProps {
  readonly title: string;
  readonly titleIcon?: string;
  readonly rightSideOfTitle?: JSX.Element;
  readonly breadcrumbs?: IBreadcrumb[];
  readonly showLoadingIndicator?: boolean;
}
interface IState {}
interface IStateToProps {}

const mapStateToProps = (state: IStore, ownProps: IProps): IStateToProps => ({});

class Page extends React.Component<IProps & IStateToProps & ReduxProps<any>, IState> {
  public componentDidMount(): void {
    this.props.dispatch(MetaAction.clearMeta());
    this.props.dispatch(MetaAction.setMeta({ title: this.props.title }));
  }

  public render(): JSX.Element {
    const componentName: string = 'Page';
    const { title, titleIcon, rightSideOfTitle, children, showLoadingIndicator } = this.props;

    return (
        <>
          <Grid fluid={true} className={styles.wrapper}>
            <div className={styles.titleWrapper}>
              <Text size={TextSizeEnum.Title1} dataAutomation={componentName} className={styles.title}>
                {titleIcon && <img className={styles.titleIcon} src={titleIcon} alt={`${title} Title Icon`} />}
                <span>{title}</span>
              </Text>
              {rightSideOfTitle}
            </div>
            <div className="vr_3" />
            <LoadingIndicator isActive={showLoadingIndicator} dataAutomation={componentName}>
              {/* Children should return a <Row></Row> element */}
              {children}
            </LoadingIndicator>
          </Grid>
        </>
    );
  }
}

export { Page as Unconnected };
export default connect(mapStateToProps)(Page);
