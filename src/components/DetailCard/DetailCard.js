import React from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import styles from './DetailCard.styles';

const DetailCard =({mealDetay}) =>{
    return(
        <View style={styles.container} >
            <Image style={styles.image} source={{uri:mealDetay.strMealThumb}} />
            <Text style={styles.title} >{mealDetay.strMeal}</Text>
            <Text style={styles.country} >{mealDetay.strArea}</Text>
            <View style={styles.line} />
            <Text style={styles.explanation} >{mealDetay.strInstructions}</Text>
            
            <TouchableOpacity style={styles.onYoutube}  onPress={()=>Linking.openURL(mealDetay.strYoutube)}><Text style={styles.onYoutubeText} >Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DetailCard;