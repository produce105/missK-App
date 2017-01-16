/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View } from 'react-native';

/** Internal dependencies **/
import style from './circle.style';

export default class Circle extends Component {

    constructor(props) {
        super(props);
        this.state = {
          showCircle1: false,
          showCircle2: false,
          showCircle3: true,
          showCircle4: false,
        };
    }
    componentWillMount() {

    }
    componentDidMount() {

    }

    render() {
      let textCircle1 = this.state.showCircle1 ? 'Good':'';
      let textCircle2 = this.state.showCircle2 ? 'Soso':'';
      let textCircle3 = this.state.showCircle3 ? 'Bad':'';
      let textCircle4 = this.state.showCircle4 ? 'Worst':'';
        return (
            <View style={style.container}>
                <View style={style.seperate}>
                  <View style={[{backgroundColor: this.props.circle1}, style.circle, style.circleMargin]}/>
                  <Text style={{color: this.props.circle1}}>{textCircle1}</Text>
                </View>
                <View style={style.seperate}>
                  <View style={[{backgroundColor: this.props.circle2}, style.circle, style.circleMargin]}/>
                  <Text style={{color: this.props.circle2}}>{textCircle2}</Text>
                </View>
                <View style={style.seperate}>
                  <View style={[{backgroundColor: this.props.circle3}, style.circle, style.circleMargin]}/>
                  <Text style={{color: this.props.circle3}}>{textCircle3}</Text>
                </View>
                <View style={style.seperate}>
                  <View style={[{backgroundColor: this.props.circle4}, style.circle, style.circleMargin]}/>
                  <Text style={{color: this.props.circle4}}>{textCircle4}</Text>
                </View>
            </View>
        )
    }
}
