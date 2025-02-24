import React from 'react';
import { View, StyleSheet } from 'react-native';
import { dynamicSize } from '../utils/dimension.style';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.10,
    elevation: 2,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: dynamicSize(12),
  }
});
export default Card;