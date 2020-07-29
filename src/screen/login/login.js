import React, {PureComponent} from 'react';
import firebase from 'firebase';
import {TextInput, Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: '',
      loading: false,
      password: '',
    };
  }

  onChangeTextUserame = (email) => {
    this.setState({email});
  };

  onChangeTextPassWord = (value) => {
    this.setState({
      password: value,
    });
  };

  onBottomPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess)
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  };

  onLoginSuccess = () => {
    this.setState({
      error: '',
      loading: false,
    });
  };

  onLogin = () => {
    const {username} = this.state;
    const {navigation} = this.props;
    navigation.navigate('Newfeed', {username});
  };

  render() {
    const {email, password, error} = this.state;
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
              value={email}
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

          <TouchableOpacity style={styles.buttun} onPress={this.onBottomPress}>
            <Text style={styles.txtButtun}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{fontSize: 35, color: 'red'}}>{error}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Login;
