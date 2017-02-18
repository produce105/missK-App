/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View, Image } from 'react-native';

/** Internal dependencies **/
import style from './detailPage.style';
import StaticBarGraph from '../../../common/controls/staticBarGraph/staticBarGraph';

export default class DetailPage extends Component {

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

                <View style={style.iconSection}>
                    <Text>대기질 예보</Text>
                    <View style={style.predictionSection}>
                        <View style={style.borderRight}>
                            <Text>오늘</Text>
                            <Image style={style.weatherIcon}source={require('./../../../assets/images/icons/icon_action_water.png')}/>
                            <Text>좋음</Text>
                        </View>
                        <View style={style.borderRight}>
                            <Text>내일</Text>
                            <Image style={style.weatherIcon}source={require('./../../../assets/images/icons/icon_action_water.png')}/>
                            <Text>보통</Text>
                        </View>
                        <View>
                            <Text>모레</Text>
                            <Image style={style.weatherIcon}source={require('./../../../assets/images/icons/icon_action_water.png')}/>
                            <Text>발표예정</Text>
                        </View>
                    </View>
                </View>
                <View style={style.descriptionSection}>
                    <View style={{flex: 1}}>
                        <View style={style.unitSection}>
                            <Text style={style.unitText}>㎍/㎥ </Text>
                        </View>
                        <StaticBarGraph mainTitle="미세먼지" subTitle="pm10" range1={'0-50'} range2={'-75'} range3={'-100'} range4={'-150'}/>
                        <StaticBarGraph mainTitle="초미세먼지" subTitle="pm2.5" range1={'0-25'} range2={'-37.5'} range3={'-50'} range4={'-75'}/>
                    </View>
                    <View style={style.belowSection}>
                        <Image source={require('./../../../assets/images/icons/icon_info.png')}/>
                        <Text style={style.guideText}>
                          미세뭔지는 한국환경공단(에어코리아)에서 제공하는 24시간 기준의 가이드라인을 따르고 있습니다.{'\n'}{'\n'}
                          지름이 10µm 이하의 먼지를 PM10이라고 합니다.{'\n'}{'\n'}
                          입자의 크기가 더 작은 미세먼지를 초 미세먼지라고 부르며 지름 2.5µm 이하의 먼지를 PM2.5라고 합니다.
                        </Text>
                    </View>
              </View>
            </View>
        )
    }
}
