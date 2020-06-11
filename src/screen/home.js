import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends PureComponent {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to chat"
          onPress={() => navigation.navigate('Chat')}
        />
      </View>
    );
  }
}
export default Home;
