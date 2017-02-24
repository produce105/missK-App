/**
 * Copyright (c) 2016 Team Mondrian - Inbody
 *
 * @author yuhogyun
 **/

/** External dependencies **/
import React, { Component, Animated } from 'react';
import {Text, View, PermissionsAndroid } from 'react-native';

/** Internal dependencies **/
import Graph from './graph';

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
    }
    componentDidMount() {

        this.requestLocationPermission();
        // this._getCurrentPos();
    }

    requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Enable location',
                    'message': 'Location is good \o/',
                },
            );

            if (granted) {
                console.log('You can use the location');
                this._getCurrentPos();
            } else {
                console.log('Location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    _getCurrentPos() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position['coords']['latitude'];
                let long = position['coords']['longitude'];

                console.log('lat', lat);
                console.log('long', long);
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
        );
    }

    render() {
        return (
            <View>
                <Text>asd</Text>
                <Graph/>
                <Graph/>
                <Graph/>
                <Graph/>
            </View>
        )
    }
}
