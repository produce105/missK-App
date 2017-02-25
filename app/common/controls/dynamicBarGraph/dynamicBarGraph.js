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
        this.divide = (this.props.micro)? 2 : 1;
    }
    componentWillMount() {

    }
    componentDidMount() {

    }


    _renderUnit() {
        if(this.props.unit){
            return (
                <View style={style.unitContainer}>
                    <Text style={style.unitText}>㎍/㎥</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={[style.container, this.props.style]}>
              <View style={style.titlestyle}>
                <Text style={style.maintitle}>{this.props.mainTitle}</Text>
                <Text style={style.subtitle}>{this.props.subTitle}</Text>
                  {
                      this._renderUnit()
                  }
              </View>
              <View style={style.barstyle}>
                  <Bar barcolor={Colors.mainBlue} dust={this._getThreshold('first')? this.props.dust : 0} animProgress={this.props.animProgress}/>
                  <Bar barcolor={Colors.mainSky} dust={this._getThreshold('second')?  this.props.dust : 0} animProgress={this.props.animProgress}/>
                  <Bar barcolor={Colors.mainYellow} dust={this._getThreshold('third')? this.props.dust : 0} animProgress={this.props.animProgress}/>
                  <Bar barcolor={Colors.mainRed} dust={this._getThreshold('forth')? this.props.dust : 0} animProgress={this.props.animProgress}/>
              </View>
            </View>
        )
    }

    _getThreshold(index) {
        switch (index) {
            case 'first': // 1차 범위에 포함
                if(0 <= this.props.dust && this.props.dust < 50/this.divide ) return true;
                else return false;
                break;
            case 'second':
                if(50/this.divide <= this.props.dust && this.props.dust < 75/this.divide ) return true;
                else return false;
                break;
            case 'third':
                if(75/this.divide <= this.props.dust && this.props.dust < 100/this.divide ) return true;
                else return false;
                break;
            case 'forth':
                if(100/this.divide <= this.props.dust && this.props.dust < 150/this.divide ) return true;
                else return false;
                break;
        }
    }

}
