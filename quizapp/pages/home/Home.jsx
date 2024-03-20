import { Image, StyleSheet, View, Text } from 'react-native'
import GhostButton from '../../src/components/ghostButton/GhostButton'
import DefaultButton from '../../src/components/defaultButton/DefaultButton'
import React from 'react'
import DefaultText from '../../src/components/defaultText/DefaultText'

const Home = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Login')
  }

  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../src/img/codequiz-logo.png')}  
      />
      <Image
        source={require('../../src/img/codequiz-logomarca.png')}  
      />
      <View style={styles.viewContainer}>
        <GhostButton
          actionText='Fazer login'
          onPress={handleLogin}
        />
        <DefaultButton
          actionText='Cadastrar'
          onPress={handleSignUp}
        /> 
      </View>
      <DefaultText
        fontWeight='700'
        content='Ponha à prova o seu conhecimento tech.'
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#edf2f4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 100
  },
  viewContainer: {
    gap: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
})