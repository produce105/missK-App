/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hsue
 */

/** External dependencies **/
import React, {StyleSheet, Dimensions, PixelRatio} from 'react-native';

/** Internal dependencies **/
import {Colors} from './../../../common/styles/common'

/** Constant **/
const {width, height, scale} = Dimensions.get('window'),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);


/** StyleSheet **/
export default StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        flex: 1
    },
    actionspace: {
        height: height * 2 / 6,
    },
    mainBlue: {
        backgroundColor: Colors.mainBlue
    },
    mainSky: {
        backgroundColor: Colors.mainSky
    },
    mainYellow: {
        backgroundColor: Colors.mainYellow
    },
    mainRed: {
        backgroundColor: Colors.mainRed
    },

});
