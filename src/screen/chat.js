import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';

class Chat extends PureComponent {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Chat Screen</Text>
        <Button
          title="Go to newfeed"
          onPress={() => navigation.navigate('News')}
        />
      </View>
    );
  }
}
export default Chat;
