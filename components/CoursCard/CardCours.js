import { Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const CardCours = ({item}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={{width:85,height:85}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLSfpd-JgP0ExbdUYU5syhM2q1URpWAxTTsCm8ioGnNzUTjODaGiywSDI6nJf0RNUebM&usqp=CAU'}} />
       <Text style={styles.title}>{item.title}</Text>
       <Text style={styles.info}>{item.info}</Text>
    </TouchableOpacity>
  )
}

export default CardCours