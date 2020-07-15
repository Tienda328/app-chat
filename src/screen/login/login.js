import React, {PureComponent} from 'react';
import {TextInput, Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onChangeTextUserame = (username) => {
    this.setState({username});
  };

  onChangeTextPassWord = (value) => {
    this.setState({
      password: value,
    });
  };

  onLogin = () => {
    const {username} = this.state;
    const {navigation} = this.props;
    navigation.navigate('Newfeed', {username});
  };

  render() {
    const {username, password} = this.state;
    return (
      <View style={styles.containter}>
        <View style={styles.containerImg}>
          <Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJTfa8woRZ6dR1jeYlKtxXxX7NdN69s6xmaDCTssIm4ZPbhcOL&usqp=CAU',
            }}
            style={styles.imgLogo}
          />
        </View>
        <View style={styles.containterAll}>
          <View style={styles.containerInputName}>
            <Text style={styles.txtInput}>Tên đăng nhập</Text>
            <TextInput
              onChangeText={this.onChangeTextUserame}
              style={styles.textInput}
              value={username}
              placeholder="john Doe"
            />
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.txtInput}>Mật khẩu</Text>
            <TextInput
              onChangeText={this.onChangeTextPassWord}
              style={styles.textInput}
              value={password}
              secureTextEntry
              placeholder="**********"
            />
          </View>
          <TouchableOpacity style={styles.buttun} onPress={this.onLogin}>
            <Text style={styles.txtButtun}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Login;
