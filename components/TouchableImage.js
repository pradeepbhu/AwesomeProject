import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

const TouchableImage = ({
    style,
    source,
    onPress,
    imageStyle,
    disabled
}) => {
    return (
        <TouchableOpacity disabled={disabled} style={style} onPress={onPress}>
            <Image
                source={source}
                resizeMode='contain'
                style={imageStyle}
            />
        </TouchableOpacity>
    )
}

export default TouchableImage