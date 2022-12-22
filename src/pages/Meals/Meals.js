import React from 'react-native';
import {View, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import MealsCard from '../../components/MealsCard';
import styles from './Meals.styles';

import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';

const Meals =({route,navigation}) =>{
    const {id}=route.params;
    const {Data,loading,error} = useFetch('http://www.themealdb.com/api/json/v1/1/filter.php?i='+id);
    const renderCategoriMeals = ({item})=> <MealsCard meals={item} onSelect={()=> onSelectMeals(item.idMeal)}/>;
    function onSelectMeals(idMeal){
        navigation.navigate('Detail',{idMeal});
    }
    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }
    
    return(
        <View style={styles.container} >
        <FlatList  keyExtractor={item =>(item.idMeal)} data={Data.meals} renderItem={renderCategoriMeals}/>
    </View>
    );
}

export default Meals;