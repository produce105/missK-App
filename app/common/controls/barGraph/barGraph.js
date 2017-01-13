/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author yuhogyun
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View } from 'react-native';

/** Internal dependencies **/
import style from './barGraph.style';

export default class BarGraph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 10
        }
    }
    componentWillMount() {

    }
    componentDidMount() {

    }

    asdasd(){

    }

    render() {
        return (
            <View style={style.container}>
                <View>
                    <Text>{this.props.mainTitle}</Text>
                    <Text>{this.props.subTitle}</Text>
                </View>
                <View style={[{backgroundColor: this.props.bar1}, style.barMargrin]}/>
                <View style={[{backgroundColor: this.props.bar2}, style.barMargrin]}/>
                <View style={[{backgroundColor: this.props.bar3}, style.barMargrin]}/>
                <View style={[{backgroundColor: this.props.bar4}, style.barMargrin]}/>
            </View>
        )
    }
}
