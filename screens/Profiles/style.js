import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        padding:15,
        
    },
    containerImg:{
        padding:15,
        width:'100%',
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    img:{
        padding:10,
        width:100,
        height:100,
        borderRadius:"100%",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    infos:{
      flex:1,
      padding:5,
      maxWidth:'60%'
    },
    nom:{
        padding:5,
        fontWeight:'bold'
    },
    text:{},
    btn:{
        marginTop:15,
        padding:15,
        backgroundColor:'#fff'
    }
})

export default styles