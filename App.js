import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Form';
import Results from './src/components/results';

export default function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);

  const onSubmit = () => {
    console.log('Num1: ', num1);
    console.log('Num2: ', num2);
  };

  return (
    <>
      <StatusBar
        backgroundColor={colors.PRIMARY_COLOR}
        barStyle="dark-content"></StatusBar>
      <View style={styles.safeArea}>
        <Text style={styles.titleApp}>Adquisición de variables</Text>
      </View>
      <View style={styles.contentView}>
        <Form setNum1={setNum1} setNum2={setNum2} />
        <Results num1={num1} num2={num2} />
        <View style={styles.button}>
          <Button
            color={colors.PRIMARY_COLOR}
            title="Enviar a consola"
            onPress={onSubmit}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25,
    color: '#000000',
  },
  button: {
    position: 'absolute',
    bottom: -250,
    width: 300,
  },
  contentView: {
    alignItems: 'center',
  }
});
