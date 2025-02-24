import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from '../../components/Card'
import { dynamicSize } from '../../utils/dimension.style'
import { COLORS } from '../../constant'

const ItemList = ({
    name,
    email,
    number,
    age,
    empID,
    department,
    address,
    editBtn,
    deleteBtn
}) => {
    return (
        <Card style={styles.cardStyle}>
            <View style={{ width: '75%', paddingRight: dynamicSize(5) }}>
                <Text numberOfLines={1} style={styles.textStyle}>Emp. Name : {name}</Text>
                <Text numberOfLines={1} style={styles.textStyle}>Email ID : {email}</Text>
                <Text numberOfLines={1} style={styles.textStyle}>Mobile No : {number}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text numberOfLines={1} style={styles.textStyle}>Age : {age}</Text>
                    <View style={{ width: '70%', alignItems: 'flex-end' }}>
                        <Text numberOfLines={1} style={styles.textStyle}>Emp ID : {empID}</Text>

                    </View>
                </View>
                <Text numberOfLines={1} style={styles.textStyle}>Department : {department}</Text>
                <Text numberOfLines={3} style={styles.textStyle}>Address : {address}</Text>

            </View>
            <View>
                <TouchableOpacity
                    onPress={editBtn}
                    style={styles.btnStyle}
                >
                    <Text style={[styles.textStyle,{color:'white'}]}>✍ Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={deleteBtn}
                    style={[styles.btnStyle,{top:dynamicSize(10),backgroundColor:COLORS.tomatoRed}]}
                >
                    <Text style={[styles.textStyle,{color:'white'}]}>🗑 Delete </Text>
                </TouchableOpacity>

            </View>
        </Card>
    )
}

export default ItemList

const styles = StyleSheet.create({
    cardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: dynamicSize(60),
        width: '100%',
        borderColor: COLORS.gray60,
        borderWidth: 0.7,
        marginBottom: dynamicSize(10),
        padding: dynamicSize(10)

    },
    textStyle: {
        color: 'black',
        fontSize: dynamicSize(14),
        marginBottom: dynamicSize(5)
    },
    btnStyle:{
        height:dynamicSize(30),
        borderWidth:1,
        borderRadius:dynamicSize(5),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.primary2
    }
})