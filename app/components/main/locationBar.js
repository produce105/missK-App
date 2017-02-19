/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View, Navigator, Image} from 'react-native';

/** Internal dependencies **/
import {width} from './../../common/styles/common';
import style from './locationBar.style';

export default class LocationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curTime :  new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true}),
            month: new Date().getMonth()+1,
            date: new Date().getDate()
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        setInterval( () => {
          this.setState({
            curTime : new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true}),
              month: new Date().getMonth()+1,
              date: new Date().getDate()
          })
        },1000)


    }
    render() {
        return (
            <View style={style.container}>
              <View style={style.locationBar}>
                <Text style={{fontSize:15}}>{this.state.month}월 {this.state.date}일 {this.state.curTime}</Text>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Seoul Gangnam</Text>
              </View>
                <View style={style.weather}>
                    <Image style={style.weatherIcon} source={require('./../../assets/images/icons/icon_weather_cloudy.png')}/>
                </View>
            </View>
        )
    }
}
