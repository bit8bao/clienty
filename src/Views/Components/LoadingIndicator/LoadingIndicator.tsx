import styles from './LoadingIndicator.module.scss';

import React from 'react';
import classNames from 'classnames';

interface IProps {
  readonly isActive?: boolean;
  readonly dataAutomation: string;
  readonly className?: string;
}
interface IState {}

export default class LoadingIndicator extends React.PureComponent<IProps, IState> {
  public static defaultProps: Omit<IProps, 'dataAutomation'> = {
    isActive: false,
    className: undefined,
  };

  public render(): JSX.Element {
    const componentName: string = 'LoadingIndicator';
    const { children, isActive, dataAutomation } = this.props;
    const cssClasses: string = classNames(this.props.className, {
      [styles.wrapper]: isActive,
    });

    return (
      <div className={cssClasses} data-automation={`${dataAutomation}-${componentName}`}>
        {isActive && (
          <div className={styles.loaderContainer}>
            <div className="loader-bar" />
          </div>
        )}
        {children}
      </div>
    );
  }
}
