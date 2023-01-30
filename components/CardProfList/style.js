import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
  card:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      padding:15,
      margin:5,
      backgroundColor:'#fff'
  },
  img:{
      width:70,
      height:70,
      borderRadius:'100%',
      padding:5,
      borderColor:'rgb(0,210,250)',
      borderWidth:3,
  },
  infos:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
  },
  nom:{
    fontSize:16,
    fontWeight:'bold',
    margin:10

  },
  specialite:{
    width:100,
    backgroundColor:'rgb(0, 183, 255)',
    padding:5,
    borderRadius:10,
    borderColor:'rgb(0, 183, 255)',
    color:'#f7f7f7'
  },
  spe:{
    color:'#fff', 
    fontSize:14,
    fontWeight:'bold',
    marginLeft:15
  }
})

export default styles