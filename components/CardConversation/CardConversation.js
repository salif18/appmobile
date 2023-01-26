import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import dayjs  from 'dayjs'
import relativeTime from'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

const CardConversation = ({item}) => {

    const isMine =()=>{
      return item.user.id === 1
    }

  return (
    <View style={[styles.card,
    {
        backgroundColor: isMine() ? 'rgb(0,210,250)' : '#fff',
        alignSelf: isMine() ? 'flex-end' : 'flex-start',
    }]}>
      <Text style={[styles.message,{color:isMine() ? '#f7f7f7':''}]}>{item.message}</Text>
      <Text style={[styles.date,{color:isMine() ? '#555':'#aaa'}]}>{dayjs(item.date).fromNow(true)}</Text>
    </View>
  )
}

export default CardConversation