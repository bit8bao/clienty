/* istanbul ignore file */
import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import IStore from '../Models/IStore';
import DirectoryReducer from "./Directory/DirectoryReducer";
import NavigationReducer from "./Navigation/NavigationReducer";


export default (history: History): Reducer<IStore> => {
    const reducerMap: ReducersMapObject<IStore> = {
        router: connectRouter(history),
        navigation: new NavigationReducer().reducer,
        directory: new DirectoryReducer().reducer,
    };

    return combineReducers(reducerMap);
};
