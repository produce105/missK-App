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
import style from './staticBarGraph.style';
import StaticBar from '../bar/staticBar';

export default class StaticBarGraph extends Component {

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
                <View style={{width: 60}}>
                    <Text style={style.maintitle}>{this.props.mainTitle}</Text>
                    <Text style={style.subtitle}>{this.props.subTitle}</Text>
                </View>
                <StaticBar background={Colors.backGray} barcolor={Colors.mainBlue} stat={'좋음'} range={this.props.range1}/>
                <StaticBar background={Colors.backGray} barcolor={Colors.mainSky} stat={'보통'} range={this.props.range2}/>
                <StaticBar background={Colors.backGray} barcolor={Colors.mainYellow} stat={'나쁨'} range={this.props.range3}/>
                <StaticBar background={Colors.backGray} barcolor={Colors.mainRed} stat={'매우나쁨'} range={this.props.range4}/>
            </View>
        )
    }
}
