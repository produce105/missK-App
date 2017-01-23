/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View } from 'react-native';

/** Internal dependencies **/
import style from './mainPage.style';
import DynamicBarGraph from '../../../common/controls/dynamicBarGraph/dynamicBarGraph';
import Circle from '../../../common/controls/circle/circle';
import LocationBar from '../locationBar';

export default class MainPage extends Component {

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
              <LocationBar />
              <Circle circle1={"blue"} circle2={"skyblue"} circle3={"yellow"} circle4={"red"}/>
              <DynamicBarGraph mainTitle="micro2" subTitle="pm25" />
              <DynamicBarGraph mainTitle="micro" subTitle="pm10" />
              <View style={style.actionspace}>
                <Text  style={{fontSize:20, fontWeight:'bold'}}>Action Comment Space</Text>
              </View>
            </View>
        )
    }
}
