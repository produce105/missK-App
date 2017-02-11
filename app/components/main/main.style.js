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

    locationBar:{
        flex:0.15
    },

    frontpage: {
        width: width,
        height: height,
  //      backgroundColor: '#FF5555',
    },

    underpage: {
        flex:1,
        width: width,
        height: height,
      //  backgroundColor: '#55FF55',
    },

    infopage: {
        flex:1,
        width: width,
        height: height,
    //    backgroundColor: '#5555FF',
    },

});
