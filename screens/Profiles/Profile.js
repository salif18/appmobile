import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./style";

const Profile = () => {
  return (
    
    <ScrollView style={styles.container}>

      <View style={styles.containerImg}>
        <Image style={styles.img} source={require('../../assets/imgProfile/profil.jpeg')}/>
        <View style={styles.infos}>
          <Text style={styles.nom}>Salif M Konate</Text>
          <Text style={styles.nom}>Salifmoctar@gmail.com</Text>
          <Text style={styles.nom}>78303208</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Mes cours</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Deconnecter</Text>
      </TouchableOpacity>

    </ScrollView>

  );
};

export default Profile;
