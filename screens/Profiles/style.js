import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        padding:15
        
    },
    containerImg:{
        padding:10,
        width:'100%',
        backgroundColor:'#fff',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        width:110,
        height:110,
        borderRadius:"100%",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eeee',
        borderWidth:3,
        borderColor:'rgb(0,210,250)'
    },
    infos:{
      flex:1,
      maxWidth:'60%'
    },
    nom:{
        padding:5,
        fontWeight:'bold',
        fontSize:18,
        margin:10
    },
    text:{
        margin:10,
        fontSize:18,
        fontWeight:'700',
        color:'#555'
    },
    groupbtns:{
         marginTop:20
    },
    btn:{
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        padding:10,
        backgroundColor:'#fff',
        borderRadius:10,
    
    }
})

export default styles