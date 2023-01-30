import { StyleSheet } from "react-native"

const styles =StyleSheet.create({
    card:{
        flexDirection:'column',
        justifyContent: 'center',
        margin:3,
        borderRadius:5,
        backgroundColor:'#fff',
        boxShadow:5,
        width:200,
    },
    title:{
        padding:5,
        fontSize:16,
        fontWeight:'bold',
        marginTop:15
    },
    info:{
        padding:5,
        fontSize:15,
        fontWeight:'300',
        marginBottom:10
    },
    img:{
        width:'100%',
        height:200,
        
    }
})

export default styles