import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import dayjs  from 'dayjs'
import relativeTime from'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)
const CardMessages = ({item,navigation}) => {
  return (
    <TouchableOpacity style={styles.card} 
     onPress={()=>navigation.navigate('messageDetails',{item})}>
      <Image style={styles.img} source={{uri:`${item.img}`}} />
      <View style={styles.info}>
         <View style={styles.nomDate}>
           <Text style={styles.nom}>{item.fullname}</Text>
           <Text style={styles.date}>{dayjs(item.date).fromNow(true)}</Text>
         </View>
      <Text style={styles.msge}>{item.last_messages}</Text>
      </View>
      
    </TouchableOpacity>
  )
}

export default CardMessages