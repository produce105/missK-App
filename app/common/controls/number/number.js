/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hogyun
 **/

/** External dependencies **/
import React, { Component } from 'react';
import { View, Text } from 'react-native';


/** Internal dependencies **/
import style, {width, height} from './number.style';

export default class Number extends Component {

    //set default props
    static defaultProps = {
        // ...Component.defaultProps,
        animProgress: 1,
        number: 100,
    }

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
                <Text style={this.props.style}>{this._getAnimatedValue()}</Text>
            </View>
        )
    }

    _getAnimatedValue() {
        let val = parseInt(this.props.number * this.props.animProgress);
        if (val == 0) return '' ;
        return val;
    }
}
