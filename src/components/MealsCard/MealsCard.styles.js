import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        borderRadius:10,
    },
    image:{
        height:175,
        width:'100%',
        position:'relative',
        borderRadius:10,
    },
    body_container:{
        flex:1,
        height:40,
        width:'100%',
        borderRadius:10,
        backgroundColor:'rgba(0,0,0,0.4)',
        position:'absolute',
        bottom:0,
        padding:3,
    },
    text:{
        textAlign:'right',
        fontSize:25,
        fontWeight:'bold',
        color:'white'
    },
});