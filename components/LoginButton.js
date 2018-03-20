import React from 'react'
import Expo from 'expo'
import { Button, Alert } from 'react-native'
import { connect } from 'react-redux'
import { loginWithToken } from '../store/user'

// import styles from '../styles'

const LoginButton = props => {

  async function facebookLogin() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('2009994855934003', {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      props.loginWithToken(token)
    } else {
      Alert.alert('Error', `Could not log in to Facebook`)
    }
  }

  return (
      <Button
        raised
        onPress={facebookLogin}
        title="LOGIN WITH FACEBOOK" />
  )
}

const mapDispatch = dispatch => ({
  loginWithToken: token => dispatch(loginWithToken(token)),
})

export default connect(null, mapDispatch)(LoginButton)
