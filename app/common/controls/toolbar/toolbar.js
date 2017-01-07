/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hogyun
 *

/** External dependencies **/
import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableOpacity, Image, ActionSheetIOS, StatusBar } from 'react-native'
import { Actions } from 'react-native-router-flux'

/** Internal dependencies **/
import style from './toolbar.style'

class Toolbar extends Component {
    render() {
        return (
            <View style={style.toolbarMenu}>
                <StatusBar backgroundColor="white" barStyle="default"/>

                <View style={style.toolbarTitleView}>
                    <Text style={style.toolbarTitle}>{this.props.name}</Text>
                </View>

            </View>
        );
    }
}

export default Toolbar;
