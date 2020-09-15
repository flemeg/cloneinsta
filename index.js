import { registerRootComponent } from 'expo'
import React from 'react'
import { Provider } from 'react-redux'
import Navigator from './src/Navigator'
import storeConfig from './src/store/storeConfig'
import { render } from 'react-dom'
import axios from 'axios'
import App from './src/App'

axios.defaults.baseURL = 'https://cloneinsta-8ee25.firebaseio.com/'

const store = storeConfig()
const Redux = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Redux)
