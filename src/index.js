//REACT
import React from 'react'
import { render } from 'react-dom'
//REDUX
import { Provider } from 'react-redux'
//Material UI
import Reboot from 'material-ui/Reboot'
//REDUX PERSIST
import { PersistGate } from 'redux-persist/integration/react'
//Components
import App from './App'
//Logic
import { store, persistor } from './configStore'

render(
    <Provider store={store}>
      <div>
        <PersistGate loading={null} persistor={persistor}>
          <Reboot />
          <App />
        </PersistGate>
      </div>
    </Provider>
  , document.getElementById('root')
)
