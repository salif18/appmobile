import { StyleSheet } from "react-native"

const styles =StyleSheet.create({
    card:{
        flexDirection:'column',
        justifyContent: 'center',
        margin:5,
        padding:15,
        borderRadius:10,
        backgroundColor:'white',
       elevation:1,
        width:200
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:15,
    },
    info:{
        fontSize:14,
        marginTop:10,
    }
})

export default styles