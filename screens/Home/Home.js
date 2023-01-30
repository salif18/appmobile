
import { View, Text, ScrollView,Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import './style'
import styles from './style'
import CardCours from '../../components/CoursCard/CardCours'
import { fakeCoursList } from '../../fakeData/fakeCoursList'
import { fakeCategory } from '../../fakeData/fakeCategory'
import CardCategory from '../../components/CardCategory/CardCategory'
import { fakeProf } from '../../fakeData/fakeProf'
import CardProff from '../../components/CardProfList/CardProff'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Home = ({navigation}) => {
  const [all ,setAll] = useState(3)

  const afficheTout=()=>{
    setAll(7)
  }
 const afficheMoins=()=>{
  setAll(3)
 }


  return (
    <ScrollView>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
         onPress={()=>navigation.navigate('Login')}
        >
        <MaterialCommunityIcons name='account' style={{color:'rgb(0,0,30)'}} size={30}/>
        </TouchableOpacity>

        {/*<Text style={styles.headerName}>Prof Salif M konate</Text>
         <Image style={styles.headerImage} source={require('../../assets/imgProfile/profil.jpeg')} />*/}
      </View>
      {/*fin de header*/ }

      {/* debut liste de cours */}
      <FlatList 
      showsHorizontalScrollIndicator={false}
        style={styles.flatlist}
        horizontal={true}
        data={fakeCoursList}
        keyExtractor={item => item.id}
        renderItem={({item})=>(
          <CardCours item={item} />
        )}
      />
      {/* fin liste des cours */}

      {/* list de choix */}
      <View style={styles.containerQuestion}>
         <Text style={styles.question}>Quelle language voulez vous apprendre?</Text>
      </View>

      <FlatList 
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       data={fakeCategory}
       keyExtractor={item => item.id}
       renderItem={({item})=>(
        <CardCategory item={item} />
       )}
      />
      {/* fin de chois */}

      {/* list des proffeseur */}
        <View style={styles.nosprof}>
           <Text style={styles.title}>Nos proffeseurs</Text>

          {all < fakeProf.length ? <TouchableOpacity onPress={afficheTout}>
           <Text style={styles.affiche}>Afficher plus</Text>
           </TouchableOpacity>
          : <TouchableOpacity onPress={afficheMoins}>
             <Text style={styles.affiche}>Afficher moins</Text>
           </TouchableOpacity>}

        </View>

        <View>
          {
            fakeProf.slice(0,all).map((item)=>(
              <CardProff item={item}/>
            ))
          }
        </View>
      {/**fin list profese */}
    </ScrollView>
  )
}

export default Home