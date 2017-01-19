/*
 * Copyright (c) 2016 Produce105 - miss_k
 *
 * Main component - main page for application
 *
 * @author hogyun
 */

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View, ScrollView } from 'react-native';

/** Internal dependencies **/
import Toolbar from '../../common/controls/toolbar/toolbar'
import MainManager from './../../managers/mainManager'
import style from './main.style'
import Circle from '../../common/controls/circle/circle';
import StaticBarGraph from '../../common/controls/staticBarGraph/staticBarGraph';
import DynamicBarGraph from '../../common/controls/dynamicBarGraph/dynamicBarGraph';

export default class Main extends Component {

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
                  <ScrollView>
                    <Circle circle1={"blue"} circle2={"skyblue"} circle3={"yellow"} circle4={"red"}/>
                    <DynamicBarGraph mainTitle="miss2" subTitle="pm25" />
                    <DynamicBarGraph mainTitle="miss" subTitle="pm10" />
                    <View style={{backgroundColor:'yellow',marginTop:50,marginBottom:120, height:240}}/>
                    <StaticBarGraph mainTitle="miss" subTitle="pm10" range1={'0-50'} range2={'-75'} range3={'-100'} range4={'-150'}/>
                    <StaticBarGraph mainTitle="miss2" subTitle="pm25" range1={'0-25'} range2={'-37.5'} range3={'-50'} range4={'-75'}/>
                    <View style={{backgroundColor:'powderblue',marginTop:50, height:240}}/>
                  </ScrollView>
            </View>
        )
    }
}
