import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';

class NewsFeed extends PureComponent {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>NewsFeed Screen</Text>
      </View>
    );
  }
}
export default NewsFeed;
