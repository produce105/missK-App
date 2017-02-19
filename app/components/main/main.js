/*
 * Copyright (c) 2016 Produce105 - miss_k
 *
 * Main component - main page for application
 *
 * @author hogyun
 */

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View, ScrollView, Animated, Easing } from 'react-native';

/** Internal dependencies **/
import Toolbar from '../../common/controls/toolbar/toolbar'
import MainManager from './../../managers/mainManager'
import style from './main.style'
import {height, width} from './../../common/styles/common';

import MainPage from './mainPage/mainPage';
import BelowPage from './belowPage/belowPage';
import DetailPage from './detailPage/detailPage';
import LocationBar from './locationBar';

import Test from './test';

let AnimatedTest = Animated.createAnimatedComponent(Test);

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            radius1: new Animated.Value(width/8/4),
            radius2: new Animated.Value(width/8/4),
            radius3: new Animated.Value(0),
            radius4: new Animated.Value(width/8/4),
            test: new Animated.Value(0),
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        //애니메이션
        this._startAnimation();
    }

    // Scroll 할때마다 발생
    handleScroll(event) {
        let page = event.nativeEvent.contentOffset.y % height; // 0 is a top page, 1 is below page

        if(page === 0) {
            this._startAnimation();
        }
    };

    _startAnimation() {
        this.state.radius1.setValue(width/8/4);
        this.state.radius2.setValue(width/8/4);
        this.state.radius3.setValue(0);
        this.state.radius4.setValue(width/8/4);
        this.state.test.setValue(0);

        Animated.parallel([
            Animated.timing(this.state.radius3, {
                toValue: width/8/1.5,
                easing: Easing.bezier(0.990, 0.000, 0.975, 0.985), //Easing is Animation Graph, Easing function to define curve
                duration: 700
            }),
            Animated.timing(this.state.test, {
                toValue: width/8/2,
                easing: Easing.bezier(0.990, 0.000, 0.975, 0.985), //Easing is Animation Graph, Easing function to define curve
                duration: 1500
            })
        ]).start();
        console.log('animation start');
    }

    render() {
        // Scroll Page event 발생하면 animation Reload
        return (
            <View style={style.container}>
                <View style={style.locationBar}>
                    <LocationBar />
                </View>
              <ScrollView pagingEnabled={true} showsVerticalScrollIndicator={false} onScroll={(evt) => this.handleScroll(evt)} scrollEventThrottle={200}>
                  <View style={style.frontpage}>
                      <MainPage
                          radius1={this.state.radius1}
                          radius2={this.state.radius2}
                          radius3={this.state.radius3}
                          radius4={this.state.radius4}
                      />
                  </View>
                  <View style={style.underpage}>
                      <DetailPage />
                  </View>
              </ScrollView>
            </View>
        )
    }
}
