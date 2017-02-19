/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View } from 'react-native';

/** Internal dependencies **/
import {Colors} from './../../../common/styles/common';
import style from './mainPage.style';
import DynamicBarGraph from '../../../common/controls/dynamicBarGraph/dynamicBarGraph';
import Circles from '../../../common/controls/circles/circles';
import MainManager from './../../../managers/mainManager';
import ActionPage from './actionPage';

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {
    }
    componentDidMount() {


    }

    async _fetchDustData() {
        this.dust = await MainManager.getDustData();
        console.log(this.dust);
    }


    render() {
        return (
            <View style={style.container}>
              <Circles circle1={Colors.mainBlue} circle2={Colors.mainSky} circle3={Colors.mainYellow}
                       circle4={Colors.mainRed} animProgress={this.props.animProgress}
                       radius1={this.props.radius1} radius2={this.props.radius2} radius3={this.props.radius3} radius4={this.props.radius4}
              />
              <DynamicBarGraph mainTitle="미세먼지" subTitle="pm25" unit={true}/>
              <DynamicBarGraph mainTitle="초 미세먼지" subTitle="pm10" />
              <View style={style.actionspace}>
                  <ActionPage type={"water"}/>
                  <ActionPage type={"fruit"}/>
              </View>
            </View>
        )
    }
}
