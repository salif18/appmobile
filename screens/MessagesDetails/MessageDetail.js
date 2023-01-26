import { FlatList ,TextInput,View } from 'react-native'
import React, { useEffect } from 'react'
import { fakeConversation } from '../../fakeData/fakeConversation'
import CardConversation from '../../components/CardConversation/CardConversation'
import styles from './style'
import BarInput from '../../components/BarInput/BarInput'

const MessageDetail = ({route,navigation}) => {
    const {item}=route.params
    useEffect(()=>{
        navigation.setOptions({title:item.fullname})
    },[])
  return (
    <View style={{flex:1}}>

    <FlatList
     data={fakeConversation}
     keyExtractor={item => item.id}
     style={styles.flatlist}
     renderItem={({item})=>(
        <CardConversation item={item}  />
     )}
    />
    <View >
       <BarInput/>
    </View>
    </View>
    
  )
}

export default MessageDetail