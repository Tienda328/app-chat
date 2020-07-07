import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containter: {
    backgroundColor: '#fff',
    flex: 1,
  },
  containterAll: {
    marginHorizontal: 16,
    flex: 2,
  },
  imgLogo: {
    height: 169,
    width: 242,
    resizeMode: 'contain',
  },
  containerImg: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 3,
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttun: {
    marginTop: 40,
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    height: 48,
    backgroundColor: '#0095DA',
  },
  containerInput: {
    marginTop: 10,
  },
  containerInputName: {
    marginTop: 30,
  },
  txtInput: {
    color: '#CFC8D5',
    fontFamily: 'SF Pro Text',
    fontSize: 17,
    marginBottom: 8,
  },
  txtButtun: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
  },
});
