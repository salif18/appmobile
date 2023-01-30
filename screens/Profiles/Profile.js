import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./style";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Profile = () => {
  return (
    
    <ScrollView style={styles.container}>

      <View style={styles.containerImg}>
        <Image style={styles.img} source={require('../../assets/imgProfile/profil.jpeg')}/>
        <View style={styles.infos}>
          <Text style={styles.nom}>Salif M Konate</Text>
          
        </View>
      </View>
     <View style={styles.groupbtns}>
      <TouchableOpacity style={styles.btn}>
      <MaterialCommunityIcons name='face-man-profile' size={35} />
        <Text style={styles.text}>Profil</Text>
        
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
      <MaterialCommunityIcons name='bookshelf' size={35} />
        <Text style={styles.text}>Mes cours</Text>
        
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <MaterialCommunityIcons name='security' size={30} />
        <Text style={styles.text}>Sécurité</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
       <MaterialCommunityIcons name='account-settings' size={35}/>
        <Text style={styles.text}>Paramètres de l'application</Text>
       
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}> 
         <MaterialCommunityIcons name='logout' size={30}/>
        <Text style={styles.text}>Déconnecter</Text>
       
      </TouchableOpacity>
      </View>
    </ScrollView>

  );
};

export default Profile;
