/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 * Main component - registers all the screens
 *
 * @author hogyun
 */

/** External dependencies **/
import React, {Component} from "react";
import {Navigator, Text, View} from "react-native";
import {Scene, Router, Schema, Actions, ActionConst, Animations, TabBar} from "react-native-router-flux";


/** Internal dependencies **/
import Main from './components/main/main';
import Temp from './components/temp/temp';

export default class MisskAppRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router hideNavBar={true}>
                <Scene key="scene">
                    <Scene key="main" component={Main} title="Main"/>
                    <Scene key="temp" component={Temp} title="Temp" initial={true}/>
                </Scene>
            </Router>
        );
    }
}
