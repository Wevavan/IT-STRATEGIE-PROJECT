import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PageAcceuil from './src/pages/acceuil/PageAcceuil';
import NouvelleTransaction from './src/pages/nouvelleTransaction/NouvelleTransaction';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Route acceuil */}        
        <Stack.Screen
          name="Home"
          component={PageAcceuil}
          options={{ title: 'Bienvenue sur IT-STRATEGIE' }}
        />

        {/* Route nouvelle transaction */}
        <Stack.Screen 
          name="nouvelle_transaction" 
          component={NouvelleTransaction}
          options={{ title: 'Nouvelle Transaction' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
