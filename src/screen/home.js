import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends PureComponent {
  render() {
    const {navigation} = this.props;
    // const {username} = route.params;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Xin chao đã đến với chúng tôi</Text>
        <Button
          title="Go to chat"
          onPress={() => navigation.navigate('Chat')}
        />
      </View>
    );
  }
}
export default Home;
