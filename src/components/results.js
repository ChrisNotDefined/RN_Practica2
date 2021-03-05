import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Results(props) {
  const {num1, num2} = props;
  return (
    <View style= {styles.viewResult}>
      <Text style= {styles.titleResult}>Resultados</Text>
      <Text>
        {+num1} + {+num2} = {+num1 + +num2}
      </Text>
      <Text>
        {+num1} - {+num2} = {+num1 - +num2}
      </Text>
      <Text>
        {+num1} * {+num2} = {+num1 * +num2}
      </Text>
      <Text>
        {+num1} / {+num2} = {+num2 != 0 ? +num1 / +num2 : 'Error, div/0'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewResult: {
    padding: 10,
    position: 'absolute',
    bottom: -180,
    backgroundColor: "#ff792b",
    borderRadius: 20,
    width: 200,
    textAlign: 'center',
  },
  titleResult: {
    fontWeight: 'bold',
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    textAlign: "center",
  }
})
