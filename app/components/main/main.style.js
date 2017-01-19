/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hogyun
 */

/** External dependencies **/
import React, {StyleSheet, Dimensions, PixelRatio} from 'react-native';

/** Internal dependencies **/
import {Colors} from './../../common/styles/common'

/** Constant **/
const {width, height, scale} = Dimensions.get('window'),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);


/** StyleSheet **/
export default StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1
    },
    frontpage: {
        width: width,
        height: height,
        backgroundColor: '#FF5555',
    },
    underpage: {
        width: width,
        height: height,
        backgroundColor: '#55FF55',
    },
    infopage: {
        width: width,
        height: height,
        backgroundColor: '#5555FF',
    }
});
