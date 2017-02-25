/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hogyun
 */

import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";

export const {width, height, scale} = Dimensions.get("window")
export const vw = width / 100
export const vh = height / 100


export const Colors = {
    mainBlack: 'rgb(3, 3, 3)',
    mainBlue: 'rgb(0, 68, 155)',
    mainSky: 'rgb(173, 222, 227)',
    mainYellow: 'rgb(255, 201, 0)',
    mainRed: 'rgb(230, 68, 43)',
    mainGray: 'rgb(170, 170, 170)',
    subGray: 'rgba(144, 144, 144, 0.2)',
    mainWhite: 'rgb(255, 255, 255)',
    backGray: 'rgb(246, 246, 246)',

}

export const FontWeights = {
    ultraThin: '100',
    thin: '200',
    light: '300',
    regular: '400',
    medium: '500',
    bold: '600'
}

export default StyleSheet.create({

})



