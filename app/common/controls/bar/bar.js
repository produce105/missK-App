/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View } from 'react-native';

/** Internal dependencies **/
import style from './bar.style';

export default class Bar extends Component {

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
            <View style={[style.container, (this.props.background)? style.grayBack : null]}>
                <Text style={{color: this.props.barcolor , textAlign:'center'}}>{this.props.stat}</Text>
                <View style={[{backgroundColor: this.props.barcolor}, style.barMargrin]}/>
                <Text style={{textAlign:'center', marginTop: 5, fontSize: 10}}>{this.props.range}</Text>
            </View>
        )
    }
}
