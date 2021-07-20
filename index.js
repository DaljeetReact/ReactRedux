/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import MyStore from './Featurs/Stores/Counterstore'
 
const ConfigApp = ()=>(
    <Provider store={MyStore}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => ConfigApp);
