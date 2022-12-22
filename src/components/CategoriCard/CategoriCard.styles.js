import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#cabebb',
        backgroundColor:'#eceff1',
        flexDirection:'row',
        margin:5,
        borderTopStartRadius:40,
        borderBottomStartRadius:40,
    },
    image:{
        height:80,
        width:80,
        resizeMode:'contain',
        borderRadius:40,
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        padding:10,
        textAlignVertical:'center',
    },
});