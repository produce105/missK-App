/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View } from 'react-native';

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
                <Text>미스크는 WHO에서 권장하는 24시간 기준의 가이드라인을 따르고 있습니다.</Text>
              </View>
              <View style={style.barsection}>
                <StaticBarGraph mainTitle="miss" subTitle="pm10" range1={'0-50'} range2={'-75'} range3={'-100'} range4={'-150'}/>
                <StaticBarGraph mainTitle="miss2" subTitle="pm25" range1={'0-25'} range2={'-37.5'} range3={'-50'} range4={'-75'}/>
              </View>
              <View style={style.detailsection}>
                <Text  style={{fontSize:20, fontWeight:'bold'}}>detail information</Text>
              </View>
            </View>
        )
    }
}
