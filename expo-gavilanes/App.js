import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './LoginScreen'; // Asegúrate de importar el nombre correcto del archivo

const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
