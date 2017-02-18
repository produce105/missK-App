/**
 * Copyright (c) 2016 Produce105 - Miss_k
 *
 * @author hsue
 **/

/** External dependencies **/
import React, { Component } from 'react';
import {Text, View, Navigator} from 'react-native';

/** Internal dependencies **/
import style from './locationBar.style';

export default class LocationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          curTime :  null,
          curDate : new Date()
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        setInterval( () => {
          this.setState({
            curTime : new Date().toLocaleTimeString('en-US'),
          })
        },1000)


    }
    render() {
      let month = this.state.curDate.getMonth()+1;
      let date = this.state.curDate.getDate();
        return (
            <View style={style.container}>
              <View style={style.locinfobar}>
                <Text style={{fontSize:15}}>{month}월 {date}일 {this.state.curTime}</Text>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Seoul Gangnam</Text>

              </View>
            </View>
        )
    }
}
