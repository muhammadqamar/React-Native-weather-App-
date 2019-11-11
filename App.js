<script src="http://localhost:8097" ></script>
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import { Appbar,TextInput  } from 'react-native-paper';
import Home from './home'
import Location from './location'
import Time from './time'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from './main'
import Timemain from './timemain'


const TabNavigator = createBottomTabNavigator({
  Temperature: Main,
  Time: Timemain,

 


  
  

},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Temperature') {
        iconName = `ios-thermometer`;
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
      
      } else if (routeName === 'Time') {
        iconName = `ios-clock`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#fff',
    style :{
borderWidth:1,
borderColor:"#000000a3",

borderTopLeftRadius:20,
borderTopRightRadius:20,
position:"absolute",
backgroundColor:"#000000a3"

    }

  
    
    
    
  },
  

},



);

export default createAppContainer(TabNavigator);


