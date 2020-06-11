import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/home';
import ChatScreen from '../screen/chat';
import newsFeedScreen from '../screen/newfeed';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="News" component={newsFeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
