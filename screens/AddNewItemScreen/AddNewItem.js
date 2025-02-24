import React, { useState, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem, loadItems, updateListItem } from '../../redux/itemsSlice';
import CustomHeader from '../../components/CustomHeader';
import BgImage from '../../constant/BgImage';
import Card from '../../components/Card';
import { dynamicSize } from '../../utils/dimension.style';
import { COLORS } from '../../constant';
import HeadingWithButton from '../../components/HeadingWithButton';
import PrimaryButton from '../../components/PrimaryButton';
import Toast from 'react-native-toast-message';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import NetInfo from '@react-native-community/netinfo';

const AddNewItem = ({ navigation, route }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        age: '',
        empID: '',
        department: '',
        address: '',
        id: ''
    });

    const [isOffline, setOfflineStatus] = useState(false)

    const dispatch = useDispatch();

    const handleChangeText = (value, label) => {
        setFormData((prevData) => ({ ...prevData, [label]: value }));
    };

    useEffect(() => {
        if (route.params?.item) {
            setFormData({
                name: route.params.item.name || '',
                email: route.params.item.email || '',
                mobileNumber: route.params.item.mobileNumber || '',
                age: route.params.item.age ? route.params.item.age.toString() : '',
                empID: route.params.item.empID || '',
                department: route.params.item.department || '',
                address: route.params.item.address || '',
                id: route.params.item.id || '',
            });
        }
    }, [route.params]);

    useEffect(() => {
        NetInfo.addEventListener((state) => {
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
        });
    }, [isOffline])

    const validateInputs = () => {
        if (formData.name.trim().length < 2) return "Please enter a valid name (at least 2 characters).";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email address.";
        if (!/^\d{10}$/.test(formData.mobileNumber)) return "Please enter a valid 10-digit mobile number.";
        if (!formData.age || isNaN(parseInt(formData.age)) || parseInt(formData.age) < 1 || parseInt(formData.age) > 120) return "Please enter a valid age (1-120).";
        if (formData.empID.trim().length < 1) return "Please enter a valid employee ID.";
        if (formData.department.trim().length < 2) return "Please enter a valid department (at least 2 characters).";
        if (formData.address.trim().length < 5) return "Please enter a valid address (at least 5 characters).";
        return null;
    };

    const handleSave = () => {
        const errorMessage = validateInputs();
        if (errorMessage) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: errorMessage,
                position: !isOffline ? 'top' : 'bottom'
            });
            return;
        }

        if (formData.id) {
            dispatch(updateListItem(formData)).then(() => {
                dispatch(loadItems());
                navigation.goBack();
            });
        } else {
            dispatch(addItem(formData)).then(() => {
                dispatch(loadItems());
                navigation.goBack();
            });
        }
    };

    return (
        <BgImage>
            <CustomHeader title='Add New Item' />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, padding: dynamicSize(10) }} keyboardShouldPersistTaps="handled">
                    <HeadingWithButton heading={'Please fill up the Form.'} />
                    <Card style={styles.cardStyle}>
                        <TextInputWithLabel labelName="Name" value={formData.name} onChangeText={(value) => handleChangeText(value, 'name')} placeholder="Please Enter Name" />
                        <TextInputWithLabel labelName="Email ID" value={formData.email} onChangeText={(value) => handleChangeText(value, 'email')} placeholder="Please Enter Email ID" keyboardType="email-address" />
                        <TextInputWithLabel labelName="Mobile Number" value={formData.mobileNumber} onChangeText={(value) => handleChangeText(value, 'mobileNumber')} placeholder="Please Enter Mobile Number" keyboardType="phone-pad" maxLength={10} />

                        <View style={styles.row}>
                            <View style={styles.rowItem}>
                                <TextInputWithLabel labelName="Age" value={formData.age} onChangeText={(value) => handleChangeText(value, 'age')} placeholder="Enter Age" keyboardType="numeric" maxLength={3} />
                            </View>
                            <View style={[styles.rowItem, { width: '60%' }]}>
                                <TextInputWithLabel labelName="Emp ID" value={formData.empID} onChangeText={(value) => handleChangeText(value, 'empID')} placeholder="Enter Employee ID" />
                            </View>
                        </View>

                        <TextInputWithLabel labelName="Department" value={formData.department} onChangeText={(value) => handleChangeText(value, 'department')} placeholder="Enter Department" />
                        <TextInputWithLabel labelName="Address" value={formData.address} onChangeText={(value) => handleChangeText(value, 'address')} placeholder="Enter Address" />

                        <PrimaryButton onPress={handleSave} style={styles.submitButton}>
                            Submit
                        </PrimaryButton>
                    </Card>
                </ScrollView>
            </KeyboardAvoidingView>
            <Toast />
        </BgImage>
    );
};

export default AddNewItem;

const styles = StyleSheet.create({
    cardStyle: {
        minHeight: dynamicSize(60),
        width: '100%',
        borderColor: COLORS.gray60,
        borderWidth: 0.7,
        padding: dynamicSize(10),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowItem: {
        width: '30%',
    },
    submitButton: {
        height: dynamicSize(40),
        marginBottom: dynamicSize(20),
    },
});
