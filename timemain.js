
import * as React from 'react';
import Home from './home'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, ScrollView, AsyncStorage ,ImageBackground , Button } from 'react-native';
import Store from './store'
import Time from './time'
import Icon from 'react-native-vector-icons/FontAwesome5'
class Timemain extends React.Component {

  render(){
    return (
      <Provider store={Store}>
        <ImageBackground source={{uri:("https://i.pinimg.com/originals/e5/05/63/e5056332cda4cfa3ba1417b4aa43cdf2.jpg")}} style={{width: '100%', height: '100%'}}>
    <View       style={{margin:20,marginTop:40,marginBottom:10,color:'#fff',flexDirection:'row'}} >
    <Icon name="chevron-left" size={15} color="#fff"  />
    <Text style={{color:'#fff',fontSize:20,paddingLeft:10,marginTop:-5}} onPress={() => this.props.navigation.goBack()}>
         
         Back
        </Text>
        </View>
      <Time />
      </ImageBackground>
      </Provider>
      ) 
     }

}

export default  Timemain




