import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header:{
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#fff',
        height:60

    },
    headerImage:{
        width:50,
        height:50,
        borderRadius:'100%',
        borderWidth:3,
        borderColor:'rgb(0,210,250),'
    
    },
    headerName:{
        fontSize:18,
        
    },
    flatlist:{
        padding:15,
    },
    containerQuestion:{
        padding:15
    },
    question:{
    fontSize:16,
    fontWeight:'bold',
    },
    nosprof:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:16,
        fontWeight:'bold'
    },
    affiche:{
        fontSize:16,
        color:'rgb(0, 183, 255)',
        fontWeight:'bold'
    },
   
})

export default styles