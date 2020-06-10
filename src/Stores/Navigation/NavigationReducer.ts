import INavigationState from './Models/INavigationState';
import NavigationAction from './NavigationAction';
import NavigationResponseModel from './Models/Navigation/NavigationResponseModel';
import IAction from '../../Models/IAction';
import BaseReducer from '../BaseReducer';

export default class NavigationReducer extends BaseReducer<INavigationState> {
  public readonly initialState: INavigationState = {
    allNavItems: [],
    isFirstRendering: true,
  };

  public [NavigationAction.REQUEST_ALL_FINISHED](state: INavigationState, action: IAction<NavigationResponseModel>): INavigationState {
    return {
      ...state,
      allNavItems: action.payload!.data,
    };
  }

  public [NavigationAction.REACT_ROUTER](state: INavigationState, action: IAction<boolean>): INavigationState {
    return {
      ...state,
      isFirstRendering: action.payload!,
    };
  }
}
