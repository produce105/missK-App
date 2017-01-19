/*
 * Copyright (c) 2016 Produce105 - miss_k
 *
 * Main component - main page for application
 *
 * @author hogyun
 */

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View, ScrollView } from 'react-native';

/** Internal dependencies **/
import Toolbar from '../../common/controls/toolbar/toolbar'
import MainManager from './../../managers/mainManager'
import style from './main.style'
import Circle from '../../common/controls/circle/circle';
import StaticBarGraph from '../../common/controls/staticBarGraph/staticBarGraph';
import DynamicBarGraph from '../../common/controls/dynamicBarGraph/dynamicBarGraph';

export default class Main extends Component {

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
              <ScrollView horizontal={true} pagingEnabled={true}>
                <ScrollView pagingEnabled={true}>
                  <View style={style.frontpage}>
                    <View style={style.locinfobar}>
                      <Text style={{fontSize:15}}>January 19th 3:32pm</Text>
                      <Text  style={{fontSize:20, fontWeight:'bold'}}>Seoul Gangnam</Text>
                    </View>
                    <Circle circle1={"blue"} circle2={"skyblue"} circle3={"yellow"} circle4={"red"}/>
                    <DynamicBarGraph mainTitle="micro2" subTitle="pm25" />
                    <DynamicBarGraph mainTitle="micro" subTitle="pm10" />
                    <View style={style.actionspace}>
                      <Text  style={{fontSize:20, fontWeight:'bold'}}>Action Comment Space</Text>
                    </View>
                  </View>

                  <View style={style.underpage}>
                    <View style={style.locinfobar}>
                      <Text style={{fontSize:15}}>January 19th 3:32pm</Text>
                      <Text  style={{fontSize:20, fontWeight:'bold'}}>Seoul Gangnam</Text>
                    </View>
                    <View style={style.threedays}>
                        <Text  style={{fontSize:20, fontWeight:'bold'}}>expectation</Text>
                    </View>
                    <View style={style.alram}>
                        <Text  style={{fontSize:20, fontWeight:'bold'}}>Alram setting</Text>
                    </View>
                  </View>
                </ScrollView>

                <View style={style.infopage}>
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
              </ScrollView>
            </View>
        )
    }
}
