import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home';
import ChatScreen from '../screen/chat';
import newsFeedScreen from '../screen/newfeed';
import LoginScreen from '../screen/login/login';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Chat" component={ChatScreen} />
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="News" component={newsFeedScreen} />
      <HomeStack.Screen name="newfeed" component={newsFeedScreen} />
    </HomeStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="login" component={LoginScreen} />
      <HomeStack.Screen name="Homenew" component={HomeScreen} />
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
            iconName = 'ios-information-circle';
          } else if (route.name === 'login') {
            iconName = 'ios-list';
          } else if (route.name === 'newfeed') {
            iconName = 'ios-list-box';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="HomeAll" component={HomeStackScreen} />
      <Tab.Screen name="login" component={LoginStackScreen} />
      <Tab.Screen name="newfeed" component={newsFeedScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Botton-tabbar">
        <HomeStack.Screen name="Botton-tabbar" component={HomeTabScreen} />
        {/* <HomeStack.Screen name="Login" component={LoginScreen} />
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
        {/* <HomeStack.Screen name="Chat" component={ChatScreen} />
        <HomeStack.Screen name="News" component={newsFeedScreen} /> */}
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
