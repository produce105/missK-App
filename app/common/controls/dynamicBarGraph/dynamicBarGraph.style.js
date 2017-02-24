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
        flex: 1,
        alignItems: 'stretch',
    },
    titlestyle: {
        flex: 0.5,
        height: 18,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'flex-end'
    },
    barstyle: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'stretch',
        marginLeft: 20,
        marginRight: 20,
    },
    maintitle: {
      textAlignVertical: 'bottom',
      textAlign: 'left',
      fontSize: 12,
      fontWeight: 'bold',
      marginRight: 3,
      marginLeft: 3,
    },
    subtitle: {
      textAlignVertical: 'bottom',
      textAlign: 'left',
      fontSize: 10,
      color: Colors.mainGray
    },
    unitContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 5
    },
    unitText: {
        fontSize: 10,
        color: Colors.mainGray
    }
})
