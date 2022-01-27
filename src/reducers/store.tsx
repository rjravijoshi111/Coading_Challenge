import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Imports: Redux Root Reducer
import appReducer from '../reducers';

// Imports: Redux Root Saga
import {rootSaga} from '../sagas';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Middleware: Redux Persist Config
const persistConfig = {
  timeout: 0,
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  stateReconciler: autoMergeLevel2,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, appReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store, persistor};
