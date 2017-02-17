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

export default class ActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }


        console.log(this.props);

    }
    componentWillMount() {
    }
    componentDidMount() {
    }

    _renderImage() {
        let fruitImg = require('./../../../../assets/images/icons/icon_action_fruits.png');
        let waterImg = require('./../../../../assets/images/icons/icon_action_water.png');

        switch(this.props.type) {
            case 'water':
                return waterImg;
            case 'fruit':
                return fruitImg;
        }
    }

    _renderTitle() {
        let title;

        switch(this.props.type) {
            case 'water':
                title = '충분한 수분섭취';
                break;
            case 'fruit':
                title = '과일, 채소 충분히 씻어먹기';
                break;
        }

        return (
            <View>
                <Text style={style.title}>{title}</Text>
            </View>
        );
    }

    _renderDescription() {
        let description1;
        let description2;


        switch(this.props.type) {
            case 'fruit':
                description1 = '꼼꼼히 먼지를 닦아서 먹어요';
                description2 = '배출을 원활하게 도와줘!';
                break;
            case 'water':
                description1 = '물을 마셔 몸 속 노폐물';
                description2 = '충분한 수분섭취';
                break;
        }

        return (
            <View>
                <Text style={[style.description, {marginTop: 5}]}>{description1}</Text>
                <Text style={style.description}>{description2}</Text>
            </View>
        )
    }


    render() {
        return (
            <View style={style.container}>
                <View style={style.imageContainer}>
                    <Image source={this._renderImage()}/>
                </View>
                <View style={style.descriptionContainer}>
                    {this._renderTitle()}
                    {this._renderDescription()}
                </View>
            </View>
        )
    }
}
