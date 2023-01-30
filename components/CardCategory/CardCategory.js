import {  Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

const CardCategory = ({item}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Html',{item})}>
    <Image style={styles.img} source={{uri:`${item.img}`}} />
      <Text style={styles.title}>{item.lang}</Text>
    </TouchableOpacity>
  )
}

export default CardCategory