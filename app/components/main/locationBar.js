/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View } from 'react-native';

/** Internal dependencies **/
import style from './locationBar.style';

export default class LocationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          curTime :  new Date().toLocaleString()
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        setInterval( () => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        },1000)
    }


    render() {
  //    let month = (this.state.curTime).getMonth()+1;
  //    let date = (this.state.curTime).getDate();
        return (
            <View style={style.container}>
              <View style={style.locinfobar}>
                <Text style={{fontSize:15}}>{this.state.curTime}</Text>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Seoul Gangnam</Text>


              </View>
            </View>
        )
    }
}
