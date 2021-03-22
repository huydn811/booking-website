import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from '../reducers/index'; // giá trị trả về từ combineReducers
import ReduxThunk from "redux-thunk";
const persistConfig = {
 key: 'root',
 storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    pReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk)),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);