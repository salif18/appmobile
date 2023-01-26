import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    card:{
        padding:15,
        margin:10,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        backgroundColor:'#fff',
        
    },
    info:{
        flex:1,
        flexDirection:'column',
        padding:15

    },
    nomDate:{
        flexDirection:'row',
        alignItems:'center',
        padding:5,
    },
    nom:{
        fontSize:16,
        fontWeight:'bold',
        marginRight:10,
    },
    
    msge:{
        flexDirection:'column',
        width:250,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        fontSize:14
    
    },
    img:{
        width:50,
        height:50,
        borderRadius:'100%',
        borderWidth:3,
        borderColor:'rgb(0,210,250)'
    }
})

export default styles