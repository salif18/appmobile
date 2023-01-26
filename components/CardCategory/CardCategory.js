import {  Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const CardCategory = ({item}) => {
  return (
    <TouchableOpacity style={styles.card}>
    <Image style={styles.img} source={{uri:`${item.img}`}} />
      <Text style={styles.title}>{item.lang}</Text>
    </TouchableOpacity>
  )
}

export default CardCategory