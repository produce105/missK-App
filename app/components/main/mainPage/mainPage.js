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
                <View style={{flex: 1}}>
                  <Circles circle1={Colors.mainBlue} circle2={Colors.mainSky} circle3={Colors.mainYellow}
                           circle4={Colors.mainRed} animProgress={this.props.animProgress}
                           radius1={this.props.radius1} radius2={this.props.radius2} radius3={this.props.radius3} radius4={this.props.radius4}
                           circleIndex={this.props.circleIndex}
                  />
                </View>
                <View style={{flex: 1}}>
              <DynamicBarGraph mainTitle="미세먼지" subTitle="pm10" unit={true} animProgress={this.props.animProgress} dust={this.props.dust}/>
              <DynamicBarGraph mainTitle="초미세먼지" subTitle="pm2.5" style={{marginBottom: 20}} micro={true} animProgress={this.props.animProgress} dust={this.props.microDust}/>
                </View>
              <View style={style.actionspace}>
                  <ActionPage style={{paddingTop: 10}} circleIndex={this.props.circleIndex} first={true}/>
                  <ActionPage style={{paddingBottom: 10}} circleIndex={this.props.circleIndex} />
              </View>
            </View>
        )
    }
}
