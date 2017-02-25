/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hogyun
 **/

/** External dependencies **/
import React, {StyleSheet, Dimensions, PixelRatio} from 'react-native';

/** Internal dependencies **/
import {Colors, FontWeights} from './../../../../common/styles/common';

/** Constant **/
const {width, height, scale} = Dimensions.get('window'),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

/** StyleSheet **/
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    imageContainer: {
        flex: 0.4,
        // marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionContainer: {
        flex: 0.6,
        // marginTop: 25,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    title: {
        fontWeight: FontWeights.bold,
        color: Colors.mainWhite,
        fontSize: 16,
    },
    description: {
        color: Colors.mainWhite,
        fontWeight: "100",
        fontSize: 14
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

