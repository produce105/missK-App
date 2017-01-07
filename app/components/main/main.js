/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 * Main component - main page for application
 *
 * @author hogyun
 */

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View } from 'react-native';

/** Internal dependencies **/
import Toolbar from '../../common/controls/toolbar/toolbar'
import MainManager from './../../managers/mainManager'
import style from './main.style'

export default class  extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
    }
    componentDidMount() {
    }

    render() {
        return (
            <View style={style.container}>
                <Toolbar name="Main"/>
                <View style={style.hello}>
                    <Text>Hello world</Text>
                </View>
            </View>
        )
    }
}
