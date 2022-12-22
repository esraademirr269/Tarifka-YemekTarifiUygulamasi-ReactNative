import React from 'react-native';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoriCard.styles';

const CategoriCard =({categories,onSelect}) =>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container} >
            <Image style={styles.image} source={{uri:categories.strCategoryThumb}} />
            <Text style={styles.text} >{categories.strCategory} </Text>
        </View>
        </TouchableWithoutFeedback>
    );
}
export default CategoriCard;