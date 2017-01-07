/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hogyun
 */

/** External dependencies **/
import React, {StyleSheet} from 'react-native';
import {width} from './../../../common/styles/common'

export default StyleSheet.create({
    toolbarMenu: {
        height: 60,
        top: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 0,
        paddingTop: 13,
        paddingRight: 15,
        alignSelf: 'stretch'
    },
    toolbarTitleView: {
        position: 'absolute',
        top: 27,
        left: 0,
        width: width - 160,
        marginLeft: 80,
        marginRight: 80,
        alignItems: 'center'
    },
    toolbarTitle: {
        color: '#595959',
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '600',
        alignSelf: 'center'
    },
});
