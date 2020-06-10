import IDirectoryState from "../Stores/Directory/Models/IDirectoryState";
import { RouterState } from 'connected-react-router';
import INavigationState from "../Stores/Navigation/Models/INavigationState";

export default interface IStore {
    readonly directory: IDirectoryState;
    readonly navigation: INavigationState;
    readonly router: RouterState;
}
