/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hogyun
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
import style, {width, height} from './tempBarGraph.style';

export default class TempBarGraph extends Component {

    //set default props
    static defaultProps = {
        // ...Component.defaultProps,
        animProgress: 1,
        barWidth: width / 2,
    };

    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {

    }
    componentDidMount() {

    }


    render() {
        /**
         * SVG(Scalable Vector Graphics)
         *
         * What is Reference: http://www.w3schools.com/graphics/svg_intro.asp
         * React Native SVG Library: https://github.com/react-native-community/react-native-svg
         * <LinearGradient id="grad"> => The id is grad => Use id like "url(#grad)"
         * 나중에 그리는 컴포넌트가 더 순서가 앞에있음, 나중에 그리는게 zIndex가 더 높다는 점에 유의하자. 아래 컴포넌트는 gray색보다 그라데이션이 들어간게 나중에 그렸으므로
         * gray색 잎에 그라데이션을 그림.
         */
        return (
            <View style={style.container}>
                <Svg
                    height="150"
                    width={width}
                >
                    <Defs>
                        <LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
                            <Stop offset="0" stopColor="rgb(255,216,216)" stopOpacity="1" />
                            <Stop offset="1" stopColor="red" stopOpacity="1" />
                        </LinearGradient>
                    </Defs>
                    <Rect
                        x="25"
                        y="5"
                        width={width / 2} /* key point width == screen width */
                        height="50"
                        fill="gray"
                        strokeWidth="3"
                        //stroke="rgb(0,0,0)"
                    />
                    <Rect
                        x="25"
                        y="5"
                        width={this.props.barWidth}
                        height="50"
                        fill="url(#grad)" //gradation for id
                        strokeWidth="3"
                        fillOpacity={this.props.animProgress}
                        //stroke="rgb(0,0,0)"
                    />
                </Svg>
            </View>
        )
    }
}
