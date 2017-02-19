/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, {StyleSheet, Dimensions, PixelRatio} from 'react-native';

/** Internal dependencies **/
import {Colors, FontWeights} from './../../../common/styles/common';

/** Constant **/
const {width, height, scale} = Dimensions.get('window'),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

/** StyleSheet **/
export default StyleSheet.create({
    container: {
        backgroundColor: Colors.backGray,
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        marginLeft: 20,
        marginRight: 20,
    },
    maintitle: {
      fontSize: 12,
      fontWeight: FontWeights.regular
    },
    subtitle: {
      fontSize: 10,
      color: 'grey'
    }
})
