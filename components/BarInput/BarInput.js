import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const BarInput = () => {
  return (
    <View style={styles.container}>
     <TextInput
     style={styles.input}
      placeholder='message ici...'
      />
      <MaterialCommunityIcons name='send' style={styles.send} />
    </View>
  )
}

export default BarInput