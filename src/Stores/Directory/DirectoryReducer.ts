import IDirectoryState from './Models/IDirectoryState';
import DirectoryAction from './DirectoryAction';
import BaseReducer from "../BaseReducer";
import IAction from "../../Models/IAction";
import DirectoryModel from "./Models/Directory/DirectoryModel";

export default class DirectoryReducer extends BaseReducer<IDirectoryState> {
  public readonly initialState: IDirectoryState = {
    directory: [],
  };

  public [DirectoryAction.INITIAL_DIRECTORY](state: IDirectoryState, action: IAction<DirectoryModel[]>): IDirectoryState {
    return {
      ...state,
      directory: action.payload!,
    };
  }
}
