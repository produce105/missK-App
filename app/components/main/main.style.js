/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hogyun
 */

/** External dependencies **/
import React, {StyleSheet, Dimensions, PixelRatio, StatusBar, Platform} from 'react-native';

/** Internal dependencies **/
import {Colors} from './../../common/styles/common'

/** Constant **/
const {width, height, scale} = Dimensions.get('window'),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export const statusBarHeight = StatusBar.currentHeight || 0; // only android,
export const locationBarHeight = 100 - statusBarHeight;

/** StyleSheet **/
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    locationBar:{
        height: locationBarHeight,
    },

    frontpage: {
        height: height - locationBarHeight - statusBarHeight
    },

    underpage: {
        height: height - locationBarHeight - statusBarHeight
    },

    infopage: {

    },

});
