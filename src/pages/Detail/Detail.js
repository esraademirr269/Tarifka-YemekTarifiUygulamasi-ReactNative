import React from 'react';
import {View, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import DetailCard from '../../components/DetailCard';

import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
const Detail =({route}) =>{
    const strMeal=route.params.idMeal;
    const {Data,loading,error}=useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+strMeal);
    
    const renderCategoriDetail =({item})=><DetailCard mealDetay={item} />
    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }
    return(
        <View >
            <FlatList keyExtractor={item =>item.idMeal} data={Data.meals} renderItem={renderCategoriDetail} />
        </View>
    );
}

export default Detail;