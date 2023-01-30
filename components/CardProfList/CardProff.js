import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const CardProff = ({item}) => {
  return (
    <TouchableOpacity style={styles.card} >
      <Image style={styles.img} source={{uri:`${item.img}`}} />
      <View style={styles.infos}>
        <Text style={styles.nom}>{item.nom}</Text>
        <View style={styles.specialite}>
         <Text style={styles.spe} >{item.speciality}</Text>
         </View>
       
      </View>
    </TouchableOpacity>
  )
}

export default CardProff