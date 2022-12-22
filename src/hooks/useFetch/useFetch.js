import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch (url){
    const [Data,setData]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    
    async function fetchData(){
       try{
        const response = await axios.get(url)
        setData(response.data);
        setLoading(false);
       }catch(err){
        setError(err.message);
        setLoading(false);
       }
    } 
    useEffect(()=>{
        fetchData();
    },[]); 
    return {Data,loading,error};
}

export default useFetch;