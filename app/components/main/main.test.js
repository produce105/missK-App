import React, { Component } from 'react';
import {Text, View, ScrollView, Animated, Easing, InteractionManager, Platform, PanResponder} from 'react-native';


export default class Main extends Component {
    render() {
        return (
            <ScrollView>
                <View
                    onStartShouldSetResponder={(evt) => {console.log('startSet'); return true;}}
                    onMoveShouldSetResponder={(evt) => {console.log('moveSet'); return true}}
                    onResponderTerminationRequest={(evt) => {console.log('TerminationRequest'); return true}}
                    onResponderGrant={(evt) => {console.log('grant')}}
                    onResponderReject={(evt) => {console.log('reject')}}
                    onResponderMove={(evt) => {console.log('move')}}
                    onResponderTerminate={(evt) => {console.log('terminate')}}
                    onResponderRelease={(evt) => {console.log('release')}}
                    style={{flex: 1}}
                >
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                    <Text>asdsadasd</Text>
                </View>
            </ScrollView>
        );
    }
}
