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
              <View style={style.textsection}>
                <Image source={require('./../../../assets/images/icons/icon_info.png')}/>
                <Text style={style.guideText}>미스크는 WHO에서 권장하는 24시간 기준의 가이드라인을 따르고 있습니다.</Text>
              </View>
                <View style={style.unitSection}>
                    <Text style={style.unitText}>㎍/㎥ </Text>
                </View>
              <View style={style.barsection}>
                <StaticBarGraph mainTitle="미세먼지" subTitle="pm10" range1={'0-50'} range2={'-75'} range3={'-100'} range4={'-150'}/>
                <StaticBarGraph mainTitle="초미세먼지" subTitle="pm2.5" range1={'0-25'} range2={'-37.5'} range3={'-50'} range4={'-75'}/>
              </View>
              <View style={style.descriptionSection}>
                  <View style={style.rowSection}>
                      <View style={style.titleSection}>
                          <Text style={style.descriptionTitle}>미세먼지</Text>
                      </View>
                      <View style={style.detailSection}>
                          <Text>지름이 10㎛(마이크로미터, 1㎛=1000분의 1㎜) 이하의 먼지로 PM(Particulate Matter)10이라고 합니다. 황산염, 질산염, 암모니아 등의 이온성분과 금속화합물, 탄소화합물 등 유해물질로 이루어져 있습니다.</Text>
                      </View>
                  </View>
                  <View style={style.rowSection}>
                      <View style={style.titleSection}>
                          <Text style={style.descriptionTitle}>초 미세먼지</Text>
                      </View>
                      <View style={style.detailSection}>
                          <Text>
                              미세먼지중 입자의 크기가 더 작은 미세먼지를 초미세먼지라 부르며 지름 2.5㎛ 이하의 먼지로서 PM2.5라고 합니다. 허파꽈리 등 호흡기의 가장 깊은 곳까지 침투해 혈관으로 들어갑니다.{'\n\n'}
                              장기간 미세먼지에 노출되면 면역력이 급격히 저하되어 감기, 천식, 기관지염 등의 호흡기 질환은 물론 심혈관 질환, 피부질환, 안구질환 등 각종 질병에 노출될 수 있습니다.
                          </Text>
                      </View>
                  </View>
              </View>
            </View>
        )
    }
}
