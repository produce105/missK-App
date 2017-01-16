/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View } from 'react-native';

/** Internal dependencies **/
import style from './staticBarGraph.style';
import Bar from '../bar/bar';

export default class StaticBarGraph extends Component {

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
                <View style={{marginRight:5, width:50}}>
                    <Text style={style.maintitle}>{this.props.mainTitle}</Text>
                    <Text style={style.subtitle}>{this.props.subTitle}</Text>
                </View>
                <Bar barcolor={"blue"} stat={'Good'} range={this.props.range1}/>
                <Bar barcolor={"skyblue"} stat={'Soso'} range={this.props.range2}/>
                <Bar barcolor={"yellow"} stat={'Bad'} range={this.props.range3}/>
                <Bar barcolor={"red"} stat={'Worst'} range={this.props.range4}/>
            </View>
        )
    }
}
