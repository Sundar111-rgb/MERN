import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './src/screens/Category';
import Cart from './src/screens/Cart';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Category">
        <Stack.Screen name="Category" component={Category} options={{ title: '', visible: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{
          headerTitleAlign: 'center',
          title: 'Cart',
          visible: false,
          headerLeft: () => (
            <TouchableOpacity><View style={{
              backgroundColor: '#fff',
              elevation: 10,
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8
            }}>
              <Image source={require('./src/assets/Path.png')} style={{ width: 6, height: 12 }} />
            </View></TouchableOpacity>
          )
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;