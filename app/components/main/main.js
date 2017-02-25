/*
 * Copyright (c) 2016 Produce105 - miss_k
 *
 * Main component - main page for application
 *
 * @author hogyun
 */

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View, ScrollView, Animated, Easing, InteractionManager, Platform, PanResponder, RefreshControl, PermissionsAndroid, ActivityIndicator, BackAndroid, Alert} from 'react-native';

/** Internal dependencies **/
import Toolbar from '../../common/controls/toolbar/toolbar'
import MainManager from './../../managers/mainManager'
import style, {statusBarHeight, locationBarHeight} from './main.style'
import {height, width} from './../../common/styles/common';

import MainPage from './mainPage/mainPage';
import BelowPage from './belowPage/belowPage';
import DetailPage from './detailPage/detailPage';
import LocationBar from './locationBar';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animProgress: new Animated.Value(0),
            dust: 0,
            microDust: 0,
            radius1: new Animated.Value(0),
            radius2: new Animated.Value(0),
            radius3: new Animated.Value(0),
            radius4: new Animated.Value(0),
            page: 0,
            refreshing: false,
            location: '',
            circleIndex: 0, // 어떤 원이 포함인지
            isLoading: true,
            airInfo: {},
            todayInfo: '',
            tomorrowInfo: '',
            afterTomorrowInfo: '',
        };

        this.scrollPosY = 0;
    }

    requestLocationPermission = async () => {
        // Android Permission
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Enable location',
                    'message': 'Location is good \o/',
                },
            );
            if (granted) {
                console.log('You can use the location');
                this._getCurrentPos().then(() => {
                    //애니메이션
                    this._startAnimation(this._getDustThrotle());
                }).catch((err) => {
                    Alert.alert(
                        'Alert',
                        'GPS, 인터넷을 켜고 앱을 실행해 주세요',
                        [
                            {text: 'OK', onPress: () => BackAndroid.exitApp()},
                        ],
                        { cancelable: false }
                    )
                    setTimeout(() => {
                        BackAndroid.exitApp();
                    }, 3000);
                    this.setState({isLoading: false});
                    console.warn(err);
                });
            } else {
                alert('GPS 설정을 켜주세요.')
                console.log('Location permission denied');
            }
        } catch (err) {
            this.setState({isLoading: false});
            console.warn(err);
        }

        // Ios Location
        try {
            if (Platform.OS === 'ios') {
                console.log('You can use the location');
                this._getCurrentPos().then(() => {
                    this._startAnimation(this._getDustThrotle());
                });
            }
        } catch (err) {
            console.warn(err);
        }
    };

    _getDustThrotle() { // 원의 범위가 어떤 것이 될지 구함 (매우좋음 좋음 나쁨 매우나쁨)
        if(0 <= this.state.dust && this.state.dust < 50 ){
            this.setState({circleIndex: 1, isLoading: false});
            return 1;
        }
        
        if(50 <= this.state.dust && this.state.dust < 75 ) {
            this.setState({circleIndex: 2, isLoading: false});
            return 2;
        }
        
        if(75 <= this.state.dust && this.state.dust < 100 ) {
            this.setState({circleIndex: 3, isLoading: false});
            return 3;
        }
        
        if(100 <= this.state.dust && this.state.dust < 150 ) {
            this.setState({circleIndex: 4, isLoading: false});
            return 4;
        }
    }

    _getCurrentPos() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let lat = position['coords']['latitude'];
                    let long = position['coords']['longitude'];
                    MainManager.getDustData(lat, long).then((response) => {
                        console.log(response);
                        this.setState({location: response['data'][4]['sendLoc']});
                        this.setState({dust: response['data'][3]['pm10Value']});
                        this.setState({microDust: response['data'][3]['pm25Value']});
                        this._setAirInfo(response['data'][0]['informGrade'], response['data'][1]['informGrade'], response['data'][2]['informGrade'], response['data'][4]['location']);
                        resolve(response);
                    }).catch((error) => {
                        alert('정보를 가져오지 못 했습니다. 잠시 후 실행해 주세요');
                        reject(error);
                        console.error(error);
                    });
                    console.log('lat', lat);
                    console.log('long', long);
                },
                (error) => reject(error)
            );
        })
    }

    _setAirInfo(_today, _tomorrow, _afterTomorrow, _location) {
        let today = _today.split(',');
        let tomorrow = _tomorrow.split(',');
        let afterTomorrow = _afterTomorrow.split(',');

        let location = this._locationUtil(_location); // 서울특별시 -> 서울
        let todayInfo = this._findLocationByArray(today, location);
        let tomorrowInfo = this._findLocationByArray(tomorrow, location);
        let afterTomorrowInfo = this._findLocationByArray(afterTomorrow, location);


        this.setState({todayInfo: todayInfo});
        this.setState({tomorrowInfo: tomorrowInfo});
        this.setState({afterTomorrowInfo: afterTomorrowInfo});
    }

    _findLocationByArray(_arr, _location) {
        let arr = _arr;
        let locationObj = {};

        for (let i=0; i < arr.length; i++) {
            let tempArr = arr[i].split(':');
            locationObj[tempArr[0].slice(0, -1)] = tempArr[1].slice(1);
        }

        return locationObj[_location];
    }

    _locationUtil(location) {
        /*
         서울특별시 - 중구
         제주특별자치도 - 연동      //제주시 연동
         전라남도 - 장천동    //순천시 장천동
         전라북도 - 삼천동    //전주시 완산구
         광주광역시 - 농성동    //서구 상무대로
         경상남도 - 용지동    //창원시 의창구
         경상북도 - 장량동    //안동시 남문동 pm25가 없음
         울산광역시 - 야음동    //남구 신정동
         대구광역시 - 이현동    //서구 이현동
         부산광역시 - 연산동    //부산진구/ 연제구
         충청남도 - 정곡리    //당진시 송악면
         충청북도 - 칠금동    //충주시 칠금동
         세종특별자치시 - 신흥동    //pm10외의 데이터 없음(pm25도)
         대전광역시 - 구성동    //유성구 대학로
         강원도 - 옥천동 / 춘천시 중앙로
         경기도 - 단대동 / 양주시
         인천광역시 - 석남     //서구 석남동
         */

        switch (location) {
            case '서울특별시':
                return '서울';
                break;
            case '제주특별자치도':
                return '제주';
                break;
            case '전라남도':
                return '전남';
                break;
            case '전라북도':
                return '전북';
                break;
            case '광주광역시':
                return '광주';
                break;
            case '경상남도':
                return '경남';
                break;
            case '경상북도':
                return '경북';
                break;
            case '울산광역시':
                return '울산';
                break;
            case '대구광역시':
                return '대구';
                break;
            case '부산광역시':
                return '부산';
                break;
            case '충청남도':
                return '충남';
                break;
            case '충청북도':
                return '충북';
                break;
            case '세종특별자치시':
                return '세종';
                break;
            case '대전광역시':
                return '';
                break;
            case '대전':
                return '';
                break;
            case '강원도':
                return '강원';
                break;
            case '경기도':
                return '경기';
                break;
            case '인천광역시':
                return '인천';
                break;
        }

    }

    _getWhichCircleAnimate(index) {
        switch (index) {
            case 1:
                return this.state.radius1;
                break;
            case 2:
                return this.state.radius2;
                break;
            case 3:
                return this.state.radius3;
                break;
            case 4:
                return this.state.radius4;
                break;
        }

    }

    _onRefresh() {
        this.setState({refreshing: true});

        this._getCurrentPos().then(() => {
            this.setState({refreshing: false});
            this._startAnimation(this._getDustThrotle());
        }).catch((error) => {
            console.log(error);
            this.setState({refreshing: false});
        });
        /*
        fetchData().then(() => {

        });
        */
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.requestLocationPermission();
        /*
        InteractionManager.runAfterInteractions(()=>{
            this._scrollView.scrollTo({y: 600});
        })
        */
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

    _startAnimation(index) {
        this.state.animProgress.setValue(0);
        this.state.radius1.setValue(0);
        this.state.radius2.setValue(0);
        this.state.radius3.setValue(0);
        this.state.radius4.setValue(0);

        let radiusArr = [];
        radiusArr.push(this.state.radius1);
        radiusArr.push(this.state.radius2);
        radiusArr.push(this.state.radius3);
        radiusArr.push(this.state.radius4);

        let radiusNum = this._getWhichCircleAnimate(index);

        radiusArr.splice(index-1, 1);

        let animationArr = [];

        for (let i=0; i < 3; i++) {
            animationArr.push(
                Animated.timing(radiusArr[i], {
                    toValue: width/8/4,
                    easing: Easing.bezier(0.990, 0.000, 0.975, 0.985), //Easing is Animation Graph, Easing function to define curve
                    duration: 700
                })
            )
        }

        // 나머지도 크게함.

        Animated.parallel([
            Animated.timing(radiusNum, {
                toValue: width/8/1.1,
                easing: Easing.bezier(0.990, 0.000, 0.975, 0.985), //Easing is Animation Graph, Easing function to define curve
                duration: 700
            }),
            Animated.timing(this.state.animProgress, {
                toValue: 1,
                easing: Easing.bezier(0.990, 0.000, 0.975, 0.985), //Easing is Animation Graph, Easing function to define curve
                duration: 700
            }),...animationArr
        ]).start();
        console.log('animation start');
    }

    render() {
        // Scroll Page event 발생하면 animation Reload
        /*{...this._panResponder.panHandlers}>*/
        /*<Text style={{textAlign: 'center', marginTop: 20}}>{this.state.page}</Text>*/
        return (
            <View style={style.container}>
                <View style={style.locationBar}>
                    <LocationBar location={this.state.location} />
                </View>
                <ScrollView ref={(ref) => this._scrollView = ref} scrollEnabled={Platform.OS==='ios'} showsVerticalScrollIndicator={false}
                            onScroll={(evt) => this.handleScroll(evt)} scrollEventThrottle={200} pagingEnabled={true}
                            refreshControl={
                              <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                              />
                            }
                >
                    <View style={{flex: 1}} {...this._panResponder.panHandlers}>
                        <View style={style.frontpage}>
                            <MainPage
                                radius1={this.state.radius1}
                                radius2={this.state.radius2}
                                radius3={this.state.radius3}
                                radius4={this.state.radius4}
                                dust={this.state.dust}
                                microDust={this.state.microDust}
                                animProgress={this.state.animProgress}
                                circleIndex={this.state.circleIndex}
                            />
                        </View>
                        <View style={style.underpage}>
                            <DetailPage
                                todayInfo={this.state.todayInfo}
                                tomorrowInfo={this.state.tomorrowInfo}
                                afterTomorrowInfo={this.state.afterTomorrowInfo}/>
                        </View>
                    </View>
                </ScrollView>
                <ActivityIndicator
                    animating={this.state.isLoading}
                    style={[style.centering, {height: 80}]}
                    size="large"
                />
            </View>
        )
    }

    _panResponder = (Platform.OS === 'android')? PanResponder.create({
        // Ask to be the responder:
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            return false
        },
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
        onPanResponderGrant: (evt, gestureState) => {
            // this.scrollPosY = evt.nativeEvent.pageY;

        },
        onPanResponderMove: (evt, gestureState) => {
            // let scrollPosY = evt.nativeEvent.pageY - this.scrollPosY;
        },
        onPanResponderTerminationRequest: (evt, gestureState) => {
            console.log('cancel');
            return true;
        },
        onPanResponderRelease: (evt, gestureState) => {
            let locationY = gestureState.dy;
            let threshold = (height - statusBarHeight - locationBarHeight) / 10;
            console.log('release');

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
            return true;
        },
    }) : [];

    _setNextPage() {
        this._scrollView.scrollTo({x: 0, y: height - statusBarHeight - locationBarHeight, animated: true});
    }

    _setPrevPage() {
        this._scrollView.scrollTo({x: 0, y: 0, animated: true});
    }
}
