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

import MainPage from './mainPage/mainPage';
import BelowPage from './belowPage/belowPage';
import DetailPage from './detailPage/detailPage';
import LocationBar from './locationBar';

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
                <View style={style.locationBar}>
                    <LocationBar />
                </View>
              <ScrollView pagingEnabled={true}>
                  <View style={style.frontpage}>
                      <MainPage />
                  </View>
                  <View style={style.underpage}>
                      <BelowPage />
                  </View>
              </ScrollView>
            </View>
        )
    }
}
