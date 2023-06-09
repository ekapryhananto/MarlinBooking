import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  containerHome: {
    backgroundColor: 'white',
    flex: 1,
  },
  imgLogo: {
    width: 190.15,
    height: 44.87,
    marginTop: 95,
    alignSelf: 'center',
  },
  imgLogoSignUp: {
    width: 190.15,
    height: 44.87,
    marginTop: 140,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    width: 400,
    textAlign: 'center',
    marginTop: 18,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetPas: {
    alignSelf: 'center',
    marginTop: 17,
    color: '#2E3283',
  },
  garis: {
    justifyContent: 'center',
    height: 1,
    width: 93.83,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginHorizontal: 14.69,
  },
  backbutton: {
    marginTop: 10,
  },
  bannerHome: {
    height: 218,
    width: '100%',
  },
  mainHome: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -18,
  },
  iconNotifHome: {
    justifyContent: 'center',
    right: 0,
    position: 'absolute',
    marginTop: 10,
    marginRight: 20,
  },
  logoProfilHome: {
    height: 39,
    width: 39,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightHome: {
    width: 319,
    height: 117,
    alignSelf: 'center',
    marginTop: -75,
    borderRadius: 20,
  },
  imgHLHome: {
    marginTop: 12,
    marginLeft: 16,
  },
  textHL: {
    flexDirection: 'column',
    marginLeft: 40,
    alignItems: 'flex-end',
    marginTop: 27,
  },
});

export default styles;
