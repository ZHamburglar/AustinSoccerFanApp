
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import reducers from '../reducers';
 
const config = {
 key: 'root',
 storage: AsyncStorage,
 whitelist: ['teamSelected']
};
 
const reducer = persistCombineReducers(config, reducers);
 
export default function configureStore(initialState = {}) {
 const store = createStore(
     reducer,
     initialState,
     applyMiddleware(thunk, logger)
 );
 
 const persistor = persistStore(store);
 return { persistor, store };
}