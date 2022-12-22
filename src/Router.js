import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categori from './pages/Categori';
import Detail from './pages/Detail';
import Meals from './pages/Meals';

const Stack = createNativeStackNavigator();

function Router(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="CategoriDetail" 
          component={Categori} 
          options={{
            title:"Categories",
            headerTitleStyle:{color:'#ffa500'},
            headerTitleAlign:"center"
          }}/>
        <Stack.Screen 
          name="Detail" 
          component={Detail} 
          options={{
            title:"Detail",
            headerTitleStyle:{color:'#ffa500'},
            headerTitleAlign:"center"
          }}/>
        <Stack.Screen 
          name="MealDetail" 
          component={Meals} 
          options={{
            title:"Meals",
            headerTitleStyle:{color:'#ffa500'},
            headerTitleAlign:"center"
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;