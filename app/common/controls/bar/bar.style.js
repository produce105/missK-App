/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, {StyleSheet, Dimensions, PixelRatio} from 'react-native';

/** Internal dependencies **/
import {Colors} from './../../../common/styles/common';

/** Constant **/
const {width, height, scale} = Dimensions.get('window'),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

/** StyleSheet **/
export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    barMargrin: {
        marginTop: 3,
        marginLeft: 2,
        marginRight: 2,
        height: 2,
    },
    grayBack: {
        backgroundColor: Colors.backGray
    }
})
