import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import LiveChat from 'react-native-livechat'

export default class Chat extends Component {
    render() {
        return (
            <View>
                <LiveChat license={9879110} />
            </View>
        );
    }
}