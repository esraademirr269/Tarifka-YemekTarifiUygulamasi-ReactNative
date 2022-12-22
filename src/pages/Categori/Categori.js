import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Categori.styles';
import CategoriCard from '../../components/CategoriCard';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';


const Categori =({navigation}) =>{
    const {Data,loading,error} =useFetch(Config.API_URL);
    function handleCategoriSelect(id){
        navigation.navigate('MealDetail',{id});
    }
    const renderCategori = ({item})=> <CategoriCard categories={item} onSelect={()=> handleCategoriSelect(item.strCategory)}/>;

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }
    return(
        <View style={styles.container} >
            <FlatList  keyExtractor={item =>(item.idCategory)} data={Data.categories} renderItem={renderCategori}/>
        </View>
    );
}

export default Categori;