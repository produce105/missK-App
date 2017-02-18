/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hsue
 */

/** External dependencies **/
import React, {StyleSheet, Dimensions, PixelRatio} from 'react-native';

/** Internal dependencies **/
import {Colors, FontWeights} from './../../../common/styles/common'

/** Constant **/
const {width, height, scale} = Dimensions.get('window'),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vres = Math.
    vmax = Math.max(vw, vh);


/** StyleSheet **/
export default StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1
    },
    textsection: {
        flexDirection: 'row',
    },
    iconSection: {
        flex: 0.23
    },
    unitSection: {
        marginRight: 20,
    },
    unitText: {
        textAlign: 'right'
    },
    barsection:{
      // flex:0.23,
      // margin:20
    },
    predictionSection: {
        flexDirection: 'row',
    },
    border: {
        borderRightColor: Colors.mainGray,
        borderRightWidth: 3,
    },
    descriptionSection:{
      flex:0.7,
      backgroundColor: Colors.mainGray,
      flexDirection: 'column'
    },
    belowSection: {
        flexDirection: 'row'
    }
});
