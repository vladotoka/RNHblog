import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';


const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}>
      <Stack.Screen name="Index" component={IndexScreen} options={{ title: 'App Index' }} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </BlogProvider>
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
