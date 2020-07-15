import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home';
import ChatScreen from '../screen/chat';
import newsFeedScreen from '../screen/newfeed';
import LoginScreen from '../screen/login/login';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Chat" component={ChatScreen} />
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="News" component={newsFeedScreen} />
      <HomeStack.Screen name="newfeed" component={newsFeedScreen} />
      <HomeStack.Screen name="login" component={LoginScreen} />
    </HomeStack.Navigator>
  );
}

function HomeTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeAll') {
            iconName = 'stepforward';
          } else if (route.name === 'login') {
            iconName = 'windowso';
          } else if (route.name === 'newfeed') {
            iconName = 'tag';
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="HomeAll" component={HomeStackScreen} />
      <Tab.Screen name="login" component={LoginScreen} />
      <Tab.Screen name="newfeed" component={newsFeedScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Botton-tabbar">
        <HomeStack.Screen name="Botton-tabbar" component={HomeTabScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
