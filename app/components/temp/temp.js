/*
 * Copyright (c) 2016 Produce105 - miss_k
 *
 * Main component - main page for application
 *
 * @author hogyun
 */

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View, ScrollView, Animated, Easing, TouchableOpacity } from 'react-native';

/** Internal dependencies **/
import style, {width, height} from './temp.style'
import TempBarGraph from './../../common/controls/tempBarGraph/tempBarGraph';
import Number from './../../common/controls/number/number';
import TempCircle from './../../common/controls/tempCircle/tempCircle';

// Animated Reference: https://facebook.github.io/react-native/docs/animated.html
let AnimatedGraph = Animated.createAnimatedComponent(TempBarGraph);
let AnimatedNumber = Animated.createAnimatedComponent(Number);
let AnimatedCircle = Animated.createAnimatedComponent(TempCircle);

export default class Temp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            barWidth: new Animated.Value(0),
            numberProgress: new Animated.Value(0),
            circleRadius: new Animated.Value(0)
        }

        /**
         * Easing
         *
         * Easing Reference: https://facebook.github.io/react-native/docs/easing.html
         * Easing Graph Reference: https://matthewlein.com/ceaser/
         */

        /**
         * Animation
         *
         * Animation Reference: https://facebook.github.io/react-native/docs/animations.html
         * Animated Reference: https://facebook.github.io/react-native/docs/animated.html
         */
        this.animation = Animated.parallel([
            Animated.timing(this.state.barWidth, {
                toValue: width / 2,
                easing: Easing.bezier(0.990, 0.000, 0.975, 0.985), //Easing is Animation Graph, Easing function to define curve
                duration: 1500
            }),
            Animated.timing(this.state.numberProgress, {
                toValue: 1,
                easing: Easing.bezier(0.990, 0.000, 0.975, 0.985),
                duration: 1500
            }),
            Animated.timing(this.state.circleRadius, {
                toValue: 50,
                easing: Easing.bezier(0.990, 0.000, 0.975, 0.985),
                duration: 1500
            })
        ]);

    }
    componentWillMount() {
    }
    componentDidMount() {
        this.animation.start();
    }

    render() {
        return (
            <View style={style.container}>
                <AnimatedGraph barWidth={this.state.barWidth}/>
                <AnimatedNumber number={ width / 2} animProgress={this.state.numberProgress}/>
                <TouchableOpacity onPress={() => this._restartAnimation()}>
                    <Text>Restart Animation</Text>
                </TouchableOpacity>
                <AnimatedCircle radius={this.state.circleRadius} height={100} width={100}></AnimatedCircle>

            </View>
        )
    }

    _restartAnimation() {
        this.state.barWidth.setValue(0);
        this.state.numberProgress.setValue(0);
        this.state.circleRadius.setValue(0);
        this.animation.start();
    }
}
