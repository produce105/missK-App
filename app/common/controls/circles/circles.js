/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

/** Internal dependencies **/
import {Colors} from './../../../common/styles/common';
import {width} from './../../../common/styles/common';
import style from './circles.style';
import NormalCircle from '../circle/circle';

let AnimatedCircle = Animated.createAnimatedComponent(NormalCircle);

export default class Circles extends Component {

    static defaultProps = {

    };

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

    componentDidMount() { // this.props.index
        this._getTitle(this);
    }

    _getTitle() {
            this.circleText1 = '매우좋음'; // '매우좋음';
            this.circleText2 = '좋음'; // '좋음';
            this.circleText3 = '나쁨'; // '나쁨';
            this.circleText4 = '매우나쁨'; // '매우나쁨';
    }

    render() {
        return (
            <View style={style.container}>
                <AnimatedCircle color={Colors.mainBlue} text={(this.props.circleIndex === 1)? this.circleText1 : ''} radius={this.props.radius1}/>
                <AnimatedCircle color={Colors.mainSky} text={(this.props.circleIndex === 2)? this.circleText2 : ''} radius={this.props.radius2}/>
                <AnimatedCircle color={Colors.mainYellow} text={(this.props.circleIndex === 3)? this.circleText3 : ''} radius={this.props.radius3}/>
                <AnimatedCircle color={Colors.mainRed} text={(this.props.circleIndex === 4)? this.circleText4 : ''} radius={this.props.radius4}/>
            </View>
        )
    }
}
