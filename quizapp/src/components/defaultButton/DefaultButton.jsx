import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DefaultButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.actionText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderColor: '#02577A',
    borderWidth: 3,
    backgroundColor: '#02577A',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  }
})

export default DefaultButton