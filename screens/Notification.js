import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BgImage from '../constant/BgImage'
import CustomHeader from '../components/CustomHeader'
import Card from '../components/Card'
import { dynamicSize } from '../utils/dimension.style'
import { COLORS } from '../constant'

const Notification = () => {
    const phoneNumber = 7309265212
    return (
        <BgImage>
            <CustomHeader
                title={'Notification'}
                onNotification={true}
            />
            <View
                style={styles.container}>
                <Card
                    style={styles.card}>
                    <Text style={{ fontSize: dynamicSize(16), fontWeight: 'bold' }}>Thank you for reviewing my work! I’d love to connect and discuss further. 🥰</Text>
                    <Text style={{ fontSize: dynamicSize(14), fontWeight: '600', marginTop: 10 }}>If you have any questions or queries, please feel free to ask. 😊 </Text>
                    <Text style={[styles.text, styles.link]}
                        onPress={() => Linking.openURL('mailto:yadavpradeep452@gmail.com')}
                    >📧 Email: Click Here</Text>
                    <Text
                        style={[styles.text, styles.link]}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/pradeep-yadav-b08410182')}
                    >
                        🔗 LinkedIn: Click Here
                    </Text>

                    <Text
                        style={[styles.text, styles.link]}
                        onPress={() => Linking.openURL(`https://wa.me/${phoneNumber}`)}
                    >
                        📱 WhatsApp: Message Me
                    </Text>

                    <Text
                        style={[styles.text, styles.link]}
                        onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
                    >
                        📞 Call: Call Me
                    </Text>

                    <View style={{ alignSelf: 'flex-start' }}>
                        <Text style={styles.signature}>Thanks,</Text>
                        <Text style={styles.signature}>Pradeep Yadav</Text>
                        <Text style={[styles.signature, { color: COLORS.gray60 }]}>Software Engineer</Text>
                    </View>
                </Card>
            </View>

        </BgImage>
    )
}

export default Notification

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginVertical: 5
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    container: {
        padding: dynamicSize(10),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        minHeight: dynamicSize(250),
        borderColor: COLORS.gray60,
        borderWidth: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        padding: dynamicSize(10)
    },
    signature: {
        fontSize: dynamicSize(16),
        fontWeight: 'bold',
        color: 'black'
    }
})