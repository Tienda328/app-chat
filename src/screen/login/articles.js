import React, {PureComponent} from 'react';
import firebase from 'firebase';
import {View, Text, Button} from 'react-native';

class Articles extends PureComponent {
  logout = () => firebase.auth().signOut();

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Articles</Text>
        <Button title="Go to chat" onPress={this.logout} />
      </View>
    );
  }
}
export default Articles;
