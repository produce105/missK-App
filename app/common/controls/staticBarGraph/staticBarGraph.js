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
import Bar from '../bar/bar';

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
                <View style={{marginRight:5, width:50}}>
                    <Text style={style.maintitle}>{this.props.mainTitle}</Text>
                    <Text style={style.subtitle}>{this.props.subTitle}</Text>
                </View>
                <Bar barcolor={Colors.mainBlue} stat={'좋음'} range={this.props.range1}/>
                <Bar barcolor={Colors.mainSky} stat={'보통'} range={this.props.range2}/>
                <Bar barcolor={Colors.mainYellow} stat={'나쁨'} range={this.props.range3}/>
                <Bar barcolor={Colors.mainRed} stat={'매우나쁨'} range={this.props.range4}/>
            </View>
        )
    }
}
