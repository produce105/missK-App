/**
 * Copyright (c) 2016 Team Mondrian - Inbody
 *
 * @author yuhogyun
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View } from 'react-native';

/** Internal dependencies **/

export default class Test extends Component {

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
            <View style={{width: this.props.width, height: this.props.width, backgroundColor: 'black'}}>

            </View>
        )
    }
}
