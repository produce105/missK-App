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


const topBarHeight = 100;

/** StyleSheet **/
export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // flex: 1
    },

    locationBar:{
        height: topBarHeight,

    },

    frontpage: {
        height: height - topBarHeight,
    },

    underpage: {
        height: height - topBarHeight,
    },

    infopage: {

    },

});
