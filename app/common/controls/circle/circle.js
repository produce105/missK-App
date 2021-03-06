/**
 * Copyright (c) 2016 Team Mondrian - Inbody
 *
 * @author yuhogyun
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
import style from './circle.style';
import {width} from './../../../common/styles/common';

export default class NormalCircle extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    // this.radius * this.props.animProgress
    /*
     <Svg
     height={width/4}
     width={width/4}
     >
     <Circle
     cx={width/8}
     cy={width/8}
     r={this.radius}
     fill={this.props.color}
     />
     </Svg>
     */
    render() {
        return (
            <View style={style.container}>
                <Svg
                    height={width/4 + 50}
                    width={width/4}
                >
                    <Circle
                        cx={width/4/2}
                        cy={width/16+21.5}
                        r={this.props.radius}
                        fill={this.props.color}
                    />
                    <Text x={width/8} y={width/8 + 48.5} fontSize={22} textAnchor='middle' fill={this.props.color}>{this.props.text}</Text>
                </Svg>

            </View>
        )
    }
}
