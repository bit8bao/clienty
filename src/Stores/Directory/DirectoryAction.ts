import ActionUtility from "../../Utilities/ActionUtility";
import DirectoryModel from "./Models/Directory/DirectoryModel";
import IDirectory from "../../Models/IDirectory";

export default class DirectoryAction {
  public static readonly INITIAL_DIRECTORY: string = 'DirectoryAction.INITIAL_DIRECTORY';

  public static createDirectory(dirTree: IDirectory[]): any {
    return ActionUtility.createAction(DirectoryAction.INITIAL_DIRECTORY, dirTree);
  }
}
