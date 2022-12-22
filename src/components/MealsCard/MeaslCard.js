import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import styles from './MealsCard.styles';

const MealsCard =({meals,onSelect}) =>{

    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container} >
                <Image style={styles.image} source={{uri:meals.strMealThumb}} />
                <View style={styles.body_container} >
                    <Text style={styles.text} >{meals.strMeal}</Text>
                </View> 
            </View> 
        </TouchableWithoutFeedback>
    );
}

export default MealsCard;