import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons } from '../constant'
import { dynamicSize } from '../utils/dimension.style'
export default function HeadingWithButton({
    heading,
    mainContainer,
    isButton,
    onPress
}) {
    return (
        <View style={[styles.container, { ...mainContainer }]}>
            <Text style={{
                ...FONTS.body5,
                color: COLORS.black
            }}>{heading}</Text>

            {isButton && <TouchableOpacity
                onPress={onPress}
                style={styles.btnStyle}>
                <Image
                    source={icons.ic_plus}
                    resizeMode='contain'
                    style={{
                         width: dynamicSize(15), 
                         height: dynamicSize(15) 
                        }}
                />
                <Text style={{ color: 'white', fontSize: dynamicSize(12) }}>Add New Item</Text>
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: dynamicSize(20),
    },
    btnStyle:{
        width: dynamicSize(120),
        height: dynamicSize(30),
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.primary2,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: dynamicSize(5),
        borderRadius: dynamicSize(20)
    }
})