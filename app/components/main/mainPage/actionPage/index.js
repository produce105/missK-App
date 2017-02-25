/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hogyun
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View, Image } from 'react-native';

/** Internal dependencies **/
import style from './index.style';
import commonStyle from './../../../../common/styles/common';

export default class ActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }
    componentWillMount() {
    }
    componentDidMount() {
    }

    _renderImage() {
        let firstImage;
        let secondImage;

        // 매우 좋음
        if(this.props.circleIndex === 1){
            firstImage = require('./../../../../assets/images/icons/icon_action_tooth.png');
            secondImage = require('./../../../../assets/images/icons/icon_action_shape.png');
        }

        // 좋음
        if(this.props.circleIndex === 2){
            firstImage = require('./../../../../assets/images/icons/icon_action_water.png');
            secondImage = require('./../../../../assets/images/icons/icon_action_fruits.png');
        }

        // 나쁨
        if(this.props.circleIndex === 3) {
            firstImage = require('./../../../../assets/images/icons/icon_action_magnifying.png');
            secondImage = require('./../../../../assets/images/icons/icon_action_house.png');
        }


        if(this.props.circleIndex === 4) {
            firstImage = require('./../../../../assets/images/icons/icon_action_mask.png');
            secondImage = require('./../../../../assets/images/icons/icon_action_window.png');
        }
        // 매우 나쁨

        if (this.props.first) {
            return firstImage;
        } else {
            return secondImage;
        }
    }

    _renderTitle() {
        let title = '';

        if(this.props.circleIndex === 1) {
            if (this.props.first) {
                title = '실외활동가능'
            } else {
                title = '실외에서 산책을 즐겨봐요'//'손발을 깨끗하게'
            }
        }
        if(this.props.circleIndex === 2) {
            if (this.props.first) {
                title = '충분한 수분섭취'
            } else {
                title = '과일,채소 충분히 씻어먹기'
            }
        }
        if(this.props.circleIndex === 3) {
            if (this.props.first) {
                title = '몸상태 확인하여 주의'
            } else {
                title = '실내활동권장'
            }
        }
        if(this.props.circleIndex === 4) {
            if (this.props.first) {
                title = '마스크 준비'
            } else {
                title = '창문닫기'
            }
        }
        return (
            <View>
                <Text style={style.title}>{title}</Text>
            </View>
        );
    }

    _renderDescription() {
        let description1 = '';

        if(this.props.circleIndex === 1) {
            if (this.props.first) {
                description1 = '소풍을 다녀와도\n좋을 대기에요'
            } else {
                description1 = '손발을 깨끗하게\n씻어요'
            }
        }
        if(this.props.circleIndex === 2) {
            if (this.props.first) {
                description1 = '물을 마셔 몸 속 노폐물 배출을\n원활하게 해줘요'
            } else {
                description1 = '꼼꼼히 미세먼지를 닦아 먹어요'
            }
        }
        if(this.props.circleIndex === 3) {
            if (this.props.first) {
                description1 = '먼지에 예민한 친구들은\n각별히 조심하세요'
            } else {
                description1 = '실내에서 할 수 있는 놀이가 좋아요'
            }
        }
        if(this.props.circleIndex === 4) {
            if (this.props.first) {
                description1 = '초미세먼지로부터 호흡기를 보호해요'
            } else {
                description1 = '창문을 꼭꼭 닫아요'
            }
        }

        return (
            <View>
                <Text style={[style.description, {marginTop: 5}]}>{description1}</Text>
            </View>
        )
    }

    _getBackgroundColor() {
        if(this.props.circleIndex === 1) {
            return style.mainBlue
        }
        if(this.props.circleIndex === 2) {
            return style.mainSky
        }
        if(this.props.circleIndex === 3) {
            return style.mainYellow
        }
        if(this.props.circleIndex === 4) {
            return style.mainRed
        }
    }

    _getCircleIndex() {
        return <Text>{this.props.circleIndex}</Text>
    }


    render() {
        return (
            <View style={[style.container, this.props.style, this._getBackgroundColor()]}>
                <View style={style.imageContainer}>
                    <Image source={this._renderImage()} style={{width: 70, height: 70}}/>
                </View>
                <View style={style.descriptionContainer}>
                    {this._renderTitle()}
                    {this._renderDescription()}
                </View>
            </View>
        )
    }
}
