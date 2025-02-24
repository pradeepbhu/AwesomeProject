import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadItems, removeItem } from '../../redux/itemsSlice';
import CustomHeader from '../../components/CustomHeader';
import BgImage from '../../constant/BgImage';
import { dynamicSize } from '../../utils/dimension.style';
import HeadingWithButton from '../../components/HeadingWithButton';
import ItemList from './ItemList';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.list);

    useEffect(() => {
        dispatch(loadItems());
    }, [dispatch]);

    function renderItem({ item, index }) {
        return (
            <ItemList
                name={item?.name}
                email={item?.email}
                number={item?.mobileNumber}
                age={item?.age}
                empID={item?.empID}
                department={item?.department}
                address={item?.address}
                editBtn={() => navigation.navigate('AddNewItem', { item })}
                deleteBtn={() => dispatch(removeItem(item.id))}
            />
        )

    }

    return (
        <BgImage>
            <CustomHeader
                title='Home'
                isHide={true}
            />
            <View style={styles.container}>
                <HeadingWithButton
                    heading={'Employee Detail List'}
                    isButton={true}
                    onPress={() => navigation.navigate('AddNewItem')}
                />
                {items != undefined && items != null && items?.length > 0 ? <FlatList
                    data={items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                /> : <View style={styles.noDataFound}>
                    <Text>No Record Found</Text>
                </View>}
            </View>
        </BgImage>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: dynamicSize(10),
    },
    addButton: {
        width: dynamicSize(100),
        height: dynamicSize(30),
        position: 'absolute',
        bottom: dynamicSize(50),
        right: dynamicSize(10),
        alignSelf: 'flex-end',
    },
    noDataFound: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

export default HomeScreen;