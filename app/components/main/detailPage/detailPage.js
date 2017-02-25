/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native';

/** Internal dependencies **/
import style from './detailPage.style';
import StaticBarGraph from '../../../common/controls/staticBarGraph/staticBarGraph';

export default class DetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {

    }
    componentDidMount() {

    }

    showAlert() {
        Alert.alert(
            '범위 및 기준',
            '미세뭔지는 한국환경공단(에어코리아)에서 제공하는 24시간 기준의 가이드라인을 따르고 있습니다.',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }

    _getInfoSource(info) {
        if(info === '보통') {
            return require('./../../../assets/images/icons/icon_face_normal.png');
        } else if (info === '좋음') {
            return require('./../../../assets/images/icons/icon_face_good.png');
        } else if (info === '나쁨') { // 나쁨??
            return require('./../../../assets/images/icons/icon_face_bad.png');
        } else if (info === '매우나쁨') {
            return require('./../../../assets/images/icons/icon_face_bad.png');
        } else { // 예보없음
            return require('./../../../assets/images/icons/icon_face_delay.png');
        }
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.iconSection}>
                    <Text style={style.predictionTitle}>통합대기질</Text>
                    <View style={style.predictionSection}>
                        <View style={style.predictionContainer}>
                            <Text style={{textAlign: 'center'}}>오늘</Text>
                            <Image style={style.weatherIcon} source={this._getInfoSource(this.props.todayInfo)}/>
                            <Text style={{textAlign: 'center'}}>{this.props.todayInfo}</Text>
                        </View>
                        <View style={style.divider}/>
                        <View style={style.predictionContainer}>
                            <Text style={{textAlign: 'center'}}>내일</Text>
                            <Image style={style.weatherIcon} source={this._getInfoSource(this.props.tomorrowInfo)}/>
                            <Text style={{textAlign: 'center'}}>{this.props.tomorrowInfo}</Text>
                        </View>
                        <View style={style.divider}/>
                        <View style={style.predictionContainer}>
                            <Text style={{textAlign: 'center'}}>모레</Text>
                            <Image style={style.weatherIcon} source={this._getInfoSource(this.props.afterTomorrowInfo)}/>
                            <Text style={{textAlign: 'center'}}>{this.props.afterTomorrowInfo}</Text>
                        </View>
                    </View>
                </View>
                <View style={style.row}/>
                <View style={style.descriptionSection}>
                    <View style={style.upperSection}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={style.standardContainer}>
                                <Text style={{fontSize: 16, marginLeft: 20}}>범위 및 기준</Text>
                                <TouchableWithoutFeedback onPress={() => {
                                    this.showAlert();
                                }}>
                                    <View style={{flex: 1, height: 20, justifyContent: 'center'}}>
                                        <Image style={{marginLeft:10}} source={require('./../../../assets/images/icons/icon_info@2x.png')}/>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={style.unitContainer}>
                                <Text style={style.unitText}>단위 ㎍/㎥ </Text>
                            </View>
                        </View>
                        <View style={{flex: 1}}>
                            <StaticBarGraph mainTitle="미세먼지" subTitle="pm10" range1={'0~50'} range2={'~75'} range3={'~100'} range4={'~150'}/>
                            <StaticBarGraph mainTitle="초미세먼지" subTitle="pm2.5" range1={'0~25'} range2={'~37.5'} range3={'~50'} range4={'~75'}/>
                        </View>
                    </View>
                    <View style={[style.row, {marginLeft: 20, marginRight: 20}]}/>
                    <View style={style.belowSection}>
                        <View style={[style.descriptionTitle, {marginLeft: 20}]}>
                            <View style={{flex: 0.5, marginTop: 25}}>
                                <Text style={{fontSize: 12}}>미세먼지</Text>
                            </View>
                            <View style={{flex: 0.5, marginBottom: 20}}>
                                <Text style={{fontSize: 12}}>초미세먼지</Text>
                            </View>
                        </View>
                        <View style={style.description}>
                            <Text style={[style.descriptionText, {marginTop: 25}]}>지름이 10µm(마이크로미터, 1µm = 1000분의 1mm) 이하의 먼지로 PM(Particulate Matter)10이라고 합니다.</Text>
                            <Text style={[style.descriptionText, {marginBottom: 20}]}>입자의 크기가 더 작은 미세먼지를 초미세먼지라 부르며 지름 2.5µm 이하의 먼지로서 PM2.5이라고 합니다.</Text>
                        </View>
                    </View>
              </View>
            </View>
        )
    }
}
