//REDUX
import {
  createStore,
  applyMiddleware
} from 'redux'
//REDUX PERSIST
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//DEVTOOLS
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'
import preloadedState from './preloadedState'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

function configureStore( preloadedState, persistedReducer ) {
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools( applyMiddleware() )
  )
  return store
}

export const store = configureStore(preloadedState, persistedReducer)
export const persistor = persistStore(store)
