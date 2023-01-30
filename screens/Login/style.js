import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:15,
    flexDirection:'column',
    backgroundColor: 'rgb(0,210,250)',
  },
  input:{
    paddingTop:15,
  },
  champ:{
    marginLeft:3,
    width:'100%',
    height:45,
    borderRadius:50,
    borderWidth:2,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    borderColor:'rgb(1,132,184)'
  },
  password:{
     margin:10,
     fontSize:16,
     fontWeight:'700'
  },
  email:{
    margin:10,
    fontSize:16,
     fontWeight:'700'
  },
  btn:{
    padding:15,
    backgroundColor:'rgb(1, 132, 184)',
    width:'100%',
    marginLeft:2,
    borderRadius:50,
    margin:25
  },
  btntext:{
    fontSize:18,
    fontWeight:'700',
    textAlign:"center",
    color:'#fff'
  },
  containertitle:{
   padding:15
  },
  title:{ 
    paddingTop:80,
    marginTop:50,
    color:'#555',
     fontWeight:'bold',
     fontSize:25,
     textAlign:'center',
  }

})

export default styles