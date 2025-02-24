import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { dynamicSize } from '../utils/dimension.style'
import { COLORS } from '../constant'

const TextInputWithLabel = ({
    labelName,
    value,
    onChangeText,
    placeholder,
    keyboardType,
    maxLength
}) => {
    return (
        <View>
            <Text>{labelName}</Text>
            <TextInput
                style={styles.inputStyle}
                value={value}
                onChangeText={(value)=>onChangeText(value,labelName)}
                placeholder={placeholder}
                placeholderTextColor={'gray'}
                numberOfLines={1}
                multiline={false}
                scrollEnabled={false}
                keyboardType={keyboardType}
                maxLength={maxLength}
            />
        </View>
    )
}

export default TextInputWithLabel

const styles = StyleSheet.create({
    inputStyle: {
        height: dynamicSize(40),
        borderRadius: dynamicSize(5),
        marginTop: dynamicSize(5),
        paddingHorizontal: dynamicSize(10),
        marginBottom: dynamicSize(10),
        borderWidth: 0.7,
        borderColor: COLORS.gray60,
        color:'black'
    },
})