import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, images } from '../constant';
import { dynamicSize } from '../utils/dimension.style';
import TouchableImage from './TouchableImage';

const CustomHeader = (props) => {
    const navigation = useNavigation();

    return (
        <ImageBackground
            style={[styles.container, props.headerStyle]}
            source={images.header_raw_image}
            resizeMode='stretch'
            imageStyle={{width:'100%', height:dynamicSize(110)}}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: dynamicSize(15)
                }}>


               <TouchableImage
                    onPress={() => {
                        if (navigation.canGoBack()) {
                            navigation.goBack();
                        }
                    }}
                    disabled={props.isHide}
                    source={!props.isHide?icons.ic_back:''}
                    imageStyle={{
                        width: dynamicSize(26),
                        height: dynamicSize(12)
                    }}
                />


                <Text style={{
                    ...FONTS.body4,
                    color: COLORS.black
                }}>
                    {props?.title}
                </Text>


                <TouchableImage
                 onPress={() => navigation.navigate('Notification')}
                 disabled={props.onNotification &&true}
                 source={!props.onNotification &&icons.ic_bell}
                    imageStyle={{
                        width: dynamicSize(20),
                        height: dynamicSize(20)
                    }}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        height: dynamicSize(110),
        justifyContent: 'center',
        paddingTop: dynamicSize(40)
    }
});

export default CustomHeader;
