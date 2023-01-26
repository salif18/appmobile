import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:20,
        backgroundColor:'#fff'
        
    },
    input:{
        flex:1,
        padding:15,
        backgroundColor:'#eeee',
        marginRight:5,
        borderRadius:5,
        fontSize:16,
        fontWeight:'bold'
    },
    send:{
        fontSize:24,
        color:'rgb(0,210,250)'
    }
})
 export default styles