/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View } from 'react-native';

/** Internal dependencies **/
import style from './locationBar.style';

export default class LocationBar extends Component {

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
              <View style={style.locinfobar}>
                <Text style={{fontSize:15}}>January 19th 3:32pm</Text>
                <Text  style={{fontSize:20, fontWeight:'bold'}}>Seoul Gangnam</Text>
              </View>
            </View>
        )
    }
}
