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
import BarGraph from '../../common/controls/barGraph/barGraph';

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
                    <BarGraph bar1={'blue'} bar2={'red'} bar3={'green'} bar4={'black'} mainTitle="미세먼지" subTitle="pm10"/>
                </View>
            </View>
        )
    }
}
