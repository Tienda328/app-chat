import React, {PureComponent} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

class Loading extends PureComponent {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
export default Loading;
