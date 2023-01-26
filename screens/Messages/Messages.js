import {  FlatList } from 'react-native'
import React from 'react'
import { fakeMessages } from '../../fakeData/fakeMessages'
import CardMessages from '../../components/CardMessages/CardMessages'
import styles from './style'

const Messages = ({navigation}) => {
  return (
    <FlatList 
    style={styles.flatlist}
      data={fakeMessages}
      keyExtractor={item => item.id}
      renderItem={({item})=>(
        <CardMessages navigation={navigation} item={item} />
      )}
    />
  )
}

export default Messages