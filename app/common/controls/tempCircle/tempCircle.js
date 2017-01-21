/**
 * Copyright (c) 2016 Team Mondrian - Inbody
 *
 * @author yuhogyun
 **/

/** External dependencies **/
import React, { Component } from 'react';
import { View } from 'react-native';
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
import style from './tempCircle.style';

export default class TempCircle extends Component {

    static defaultProps = {
        radius: 50
    }

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
                <Svg
                    height={this.props.height}
                    width={this.props.width}
                >
                    <Circle
                        cx="50"
                        cy="50"
                        r={this.props.radius}
                        fill="pink"
                    />
                </Svg>
            </View>
        )
    }
}
