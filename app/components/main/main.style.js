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
  //      backgroundColor: '#FF5555',
    },
    locinfobar:{
      margin: 20,
    },
    actionspace: {
        height: height/3,
        backgroundColor: '#FFFF55',
        alignItems: 'center',
        justifyContent:'center',
    },

    underpage: {
        flex:1,
        width: width,
        height: height,
      //  backgroundColor: '#55FF55',
    },
    threedays: {
        flex:0.5,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#888888',
    },
    alram: {
        flex:0.5,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#F4FFF4',
    },


    infopage: {
        flex:1,
        width: width,
        height: height,
    //    backgroundColor: '#5555FF',
    },
    textsection: {
        flex:0.07,
        marginTop: 30,
        alignItems: 'center',
        justifyContent:'center',
    },
    barsection:{
      flex:0.23,
      margin:20
    },
    detailsection:{
      flex:0.7,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#AAAAAA',
    }
});
