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

const wid = Dimensions.get('window').width;

/** StyleSheet **/
export default StyleSheet.create({
    container: {
        flex: 1,
        width: wid,
        alignItems: 'stretch',
    },
    titlestyle: {
        flex: 0.5,
        width: wid,
        height: 18,
        flexDirection: 'row',
        alignItems: 'stretch',
        marginLeft: 20,
        marginRight: 20,
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
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 3
    },
    subtitle: {
      textAlignVertical: 'bottom',
      textAlign: 'left',
      fontSize: 10,
      color: 'grey'
    }
})
