import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        height:300,
        width:Dimensions.get('window').width,
        
    },
    title:{
        fontSize:28,
        color:'red',
        fontWeight:'bold',
    },
    country:{
        fontSize:20,
        color:'red',
        fontWeight:'bold',
    },
    line:{
        borderWidth:1,
        borderColor:'#bcbcbc',
    },
    onYoutube:{
        height:34,
        backgroundColor:'red',
        borderRadius:5,
        margin:10,
        alignItems:'center',
        justifyContent:'center',
    },
    onYoutubeText:{
        fontWeight:'bold',
        fontSize:15,
        color:'white',
    }
});