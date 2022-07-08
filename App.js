import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from './src/context/BlogContext';

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import TestScreen from './src/screens/TestScreen';


const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Index" screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}>
      <Stack.Screen name="Index" component={IndexScreen} options={{ title: 'Blog List' }} />
      <Stack.Screen name="Show" component={ShowScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
      
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
