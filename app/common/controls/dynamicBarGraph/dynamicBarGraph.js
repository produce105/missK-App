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
import style from './dynamicBarGraph.style';
import Bar from '../bar/bar';

export default class DynamicBarGraph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 10
        }
    }
    componentWillMount() {

    }
    componentDidMount() {

    }


    render() {
        return (
            <View style={style.container}>
              <View style={style.titlestyle}>
                <Text style={style.maintitle}>{this.props.mainTitle}</Text>
                <Text style={style.subtitle}>{this.props.subTitle}</Text>
              </View>
              <View style={style.barstyle}>
                  <Bar barcolor={Colors.mainBlue} />
                  <Bar barcolor={Colors.mainSky} />
                  <Bar barcolor={Colors.mainYellow} />
                  <Bar barcolor={Colors.mainRed} />
              </View>
            </View>
        )
    }
}
