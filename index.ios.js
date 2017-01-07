/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 * Main component - registers all the screens
 *
 * @author hogyun
 */


/** External dependencies **/
import React, { Component } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
StatusBar.setBarStyle('light-content');

/** Internal dependencies **/
import MisskAppRouter from './app/main';

export default class MisskApp extends Component {
    render() {
        return (
            <MisskAppRouter />
        );
    }
}

AppRegistry.registerComponent('miss_k', () => MisskApp);
