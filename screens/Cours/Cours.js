import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import styles from './style'

 const Cours=()=>{
    const navigation = useNavigation()
    const route = useRoute()
    const {item}= route.params
    useEffect(()=>{
        navigation.setOptions({title:item.lang})
    },[])
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text style={styles.text}>{item.contenue.lecon}</Text>
    </View>
  )
}
export default Cours