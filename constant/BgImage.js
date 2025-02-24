import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import images from './images'

export default function BgImage(props) {
    return (
        <ImageBackground
            source={images?.ic_bg}
            style={{ flex: 1 }}
            resizeMode='cover'
        >
            {props?.children}
        </ImageBackground>
    )
}