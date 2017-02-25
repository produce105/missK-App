/**
 * Copyright (c) 2016 Team Mondrian - Inbody
 *
 * @author yuhogyun
 **/

/** External dependencies **/
import React, { Component, Animated } from 'react';
import {Text, View, PermissionsAndroid } from 'react-native';

/** Internal dependencies **/
import Graph from './graph';

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
    }
    componentDidMount() {


        // this._getCurrentPos();
    }

    render() {
        return (
            <View>
                <Text>asd</Text>
                <Graph/>
                <Graph/>
                <Graph/>
                <Graph/>
            </View>
        )
    }
}
