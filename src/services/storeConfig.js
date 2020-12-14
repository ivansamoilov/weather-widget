import {  applyMiddleware, createStore  } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['data']
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export  { store, persistor };
