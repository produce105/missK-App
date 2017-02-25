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
        backgroundColor: 'white',
        flex: 1
    },
    textsection: {
        flexDirection: 'row',
    },
    iconSection: {
        flex: 0.23
    },
    unitContainer: {
        flex: 0.5,
        marginRight: 20,
        justifyContent: 'center'
    },
    unitText: {
        textAlign: 'right',
        fontSize: 10
    },
    barsection:{
      // flex:0.23,
      // margin:20
    },
    predictionTitle: {
        color: Colors.mainBlack,
        fontSize: 16,
        marginLeft: 20,
    },
    weatherIcon: {
        marginTop: 20,
        marginBottom: 20,
    },
    predictionSection: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    predictionContainer: {
        marginRight: 30,
        marginLeft: 30,
    },
    border: {
        borderRightColor: Colors.mainGray,
        borderRightWidth: 3,
    },
    divider: {
        width: 1,
        backgroundColor: Colors.subGray,
        marginTop: 30,
        marginBottom: 30,
        // flex: 0.5
    },
    row: {
        borderTopWidth: 0.4,
        backgroundColor: Colors.backGray,
    },
    descriptionSection:{
      flex:0.4,
      backgroundColor: Colors.backGray,
      flexDirection: 'column'
    },
    descriptionTitle: {
        flex: 0.2,
    },
    description: {
        flex: 0.8,
        marginRight: 20,
    },
    descriptionText: {
        flex: 0.5,
        fontSize: 11.5
    },
    upperSection: {
        flex: 0.5,
        marginTop: 20,
    },
    standardContainer: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    belowSection: {
        flex: 0.5,
        flexDirection: 'row',
        // marginTop: 20
    }
});
