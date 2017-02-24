/*
 * Copyright (c) 2016 Produce105 - miss_k
 *
 * Main component - main page for application
 *
 * @author hogyun
 */

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View, ScrollView, Animated, Easing, InteractionManager, Platform, PanResponder, RefreshControl} from 'react-native';

/** Internal dependencies **/
import Toolbar from '../../common/controls/toolbar/toolbar'
import MainManager from './../../managers/mainManager'
import style, {statusBarHeight, locationBarHeight} from './main.style'
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
            page: 0,
            refreshing: false,
        }

        this.scrollPosY = 0;
        this.test = 0;
    }

    _onRefresh() {
        this.setState({refreshing: true});

        setTimeout(() => {
            this.setState({refreshing: false}, ()=>{this._startAnimation()});
        }, 1000);
        /*
         fetchData().then(() => {

         });
         */
    }

    componentWillMount() {
    }

    componentDidMount() {
        //애니메이션
        this._startAnimation();
        InteractionManager.runAfterInteractions(() => {
            // this._scrollView.scrollTo({x: 0, y: height - statusBarHeight - locationBarHeight, animated: true});
            console.log("called DidMount");
        })
    }

    // Scroll 할때마다 발생
    handleScroll(event) {
        // console.log('scroll: ' ,event);
        let page = event.nativeEvent.contentOffset.y / (height - statusBarHeight - locationBarHeight); // 0 is a top page, 1 is below page

        if(page === 0) {
            this.setState({page: 0});

        } else if(page === 1) {
            this.setState({page: 1});
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
        /*{...this._panResponder.panHandlers}>*/
        /*<Text style={{textAlign: 'center', marginTop: 20}}>{this.state.page}</Text>*/
        return (
            <View style={style.container} {...this._panResponder.panHandlers}>
                <View style={style.locationBar}>
                    <LocationBar />
                </View>
                <ScrollView ref={(ref) => this._scrollView = ref} scrollEnabled={(Platform.OS === 'ios')} showsVerticalScrollIndicator={false}
                            onScroll={(evt) => this.handleScroll(evt)} scrollEventThrottle={200} pagingEnabled={true}
                            refreshControl={
                              <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                              />
                            }
                >
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

    _panResponder = (Platform.OS === 'android')? PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
                this.scrollPosY = evt.nativeEvent.pageY;

            },
            onPanResponderMove: (evt, gestureState) => {
                let scrollPosY = evt.nativeEvent.pageY - this.scrollPosY;
            },
            onPanResponderTerminationRequest: (evt, gestureState) => {
                console.log('cancel');
                return true;
            },
            onPanResponderRelease: (evt, gestureState) => {
                let locationY = gestureState.dy;
                let threshold = (height - statusBarHeight - locationBarHeight) / 10;
                console.log('release');

                // console.log(locationY)

                // console.log('threshold: ', threshold);
                // console.log('locationY: ', locationY);

                if(locationY > 0){ // up scroll
                    // console.log('up Scroll');
                    if(locationY > threshold) {
                        console.log('upper scroll');
                        this._setPrevPage();
                    }else{
                        // this._setNextPage();
                    }
                }else { // down scroll
                    // console.log('down Scroll');
                    if(locationY < threshold * -1) {
                        console.log('Down scroll');
                        this._setNextPage();
                    } else{
                        // this._setPrevPage();
                    }
                }

            },
            onPanResponderTerminate: (evt, gestureState) => {

            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                return false;
            },
        }) : [];

    _setNextPage() {
        this._scrollView.scrollTo({x: 0, y: height - statusBarHeight - locationBarHeight, animated: true});
    }

    _setPrevPage() {
        this._scrollView.scrollTo({x: 0, y: 0, animated: true});
    }
}
