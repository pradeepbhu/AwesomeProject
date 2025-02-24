import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { dynamicSize } from '../utils/dimension.style';
import { COLORS, FONTS } from '../constant';


const PrimaryButton = ({
    children,
    style,
    onPress,
    buttonSize,
    buttonText,
    buttonStyle,
    disabled = false
}) => {
    return (
        <View style={style}>
            <TouchableOpacity
                disabled={disabled}
                style={[
                    styles.button, 
                    buttonSize,
                    buttonStyle,
                ]}
                onPress={onPress}
            >
                <Text style={[styles.text, buttonText]}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: dynamicSize(55.72),
        backgroundColor: COLORS.primary3,
        justifyContent: 'center',
        borderRadius: dynamicSize(5)
    },
    text: {
        ...FONTS.body5,
        color: COLORS.white,
        textAlign: 'center',
    }
})
export default PrimaryButton