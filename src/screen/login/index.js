import React, {PureComponent} from 'react';
import firebase from 'firebase';
import {View, Text, Button} from 'react-native';
import Login from './login';
import Articles from './articles';
import Loading from './loading';

class LoginAll extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    };
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyDtMbXfkZSClG2TZT4gAPpU77uFG7gsOaQ',
      authDomain: 'test-3c386.firebaseapp.com',
      databaseURL: 'https://test-3c386.firebaseio.com',
      projectId: 'test-3c386',
      storageBucket: 'test-3c386.appspot.com',
      messagingSenderId: '282395987620',
      appId: '1:282395987620:web:ca79c721fb7fa8c56a2031',
      measurementId: 'G-G2ZB0S7JT7',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();

    firebase.auth().onAuthStateChanged((user) => {
      console.log('user', user);
      if (user) {
        this.setState({
          loggedIn: false,
        });
      } else {
        this.setState({
          loggedIn: true,
        });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return <Login />;
      case false:
        return <Articles />;
      default:
        return <Loading />;
    }
  };

  render() {
    return <View style={{flex: 1}}>{this.renderContent()}</View>;
  }
}
export default LoginAll;
