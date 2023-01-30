import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { TextInput } from 'react-native-paper'
import styles from './style'

const Login = () => {

  return (
    <View style={styles.container}>
      
    <View style={styles.containertitle}> 
    <Text style={styles.title}>Se connecter</Text>
    </View>
   
      <View style={styles.input}>
          <View>
          <Text style={styles.email}>Email</Text>
          <TextInput style={styles.champ} placeholder='Email' />
          </View>
          <View>
          <Text style={styles.password}>Password</Text>
          <TextInput style={styles.champ} placeholder='Password' />
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
      </View>

    </View>
  )
}

export default Login