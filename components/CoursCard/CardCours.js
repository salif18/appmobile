import { Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const CardCours = ({item}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.img} source={{uri:item.img}}/>
       <Text style={styles.title}>{item.title}</Text>
       <Text style={styles.info}>{item.info}</Text>
    </TouchableOpacity>
  )
}

export default CardCours