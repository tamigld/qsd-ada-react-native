import { Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const Card = (props) => {
  return (
    <TouchableOpacity style={styles.cardStyle} onPress={props.onPress}>
      <Image source={props.imageUrl}/>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    cardStyle: {
        padding: 25,
        backgroundColor: '#edf2f4',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.10,
        shadowRadius: 9.22,
        elevation: 12
    }
})