<script src="http://localhost:8097" ></script>
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView ,AsyncStorage } from 'react-native';
import { Appbar,TextInput,Card ,  Searchbar ,List  } from 'react-native-paper';

import { connect } from 'react-redux'

var city =""
var lat= ""
var long= ""


class Location extends React.Component {

  state = {
    text: '',
    location:[]
  };


alllocation=(e)=>{
  
  this.setState({
    text:e,
  
 
  })
  fetch('https://autocomplete.wunderground.com/aq?query='+this.state.text).then(c=>c.json().then(b=>{
    console.log(b)
   this.setState({
location:b.RESULTS.slice(0,15)
   })
    }).catch((err)=>{
      
        console.log(err)
      
    }))
}





  showtemperature = async (loc,lat1,lon)=>{

   this.setState({
     text:loc,
     location:[]
   })
   lat= lat1
   long= lon
   city=loc
   

this.props.addcity()
this.props.addlat()
this.props.addlong()
  
    await AsyncStorage.setItem("city", loc);
  
  
 this.props.qamar()
       
   
    //this.props.navigation.navigate('Home',{updateprop:'ok'} )
  }




render(){

  return ( 
    <View>
         
     
      <Searchbar  style={{margin:20,marginTop:45,marginBottom:0}}
         placeholder="Search Location"
        value={this.state.text}
        onChangeText={this.alllocation.bind(this)}
      />
      <ScrollView style={{margin:25,marginTop:0}}> 
      {
        this.state.location.map(x=>{
         
         return(
          <Card style={styles.cardlocation}  key={x.name}  onPress={()=>this.showtemperature(x.name,x.lat,x.lon)}>
          <List.Item title={x.name} ></List.Item>
          </Card>
         )

        })
      }
      </ScrollView>
         </View>
  );
}

}



const styles = StyleSheet.create({
  container: {
 backgroundColor:'red',


  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    cardlocation:{
   
    }
  });



function mapDispatchToProps(dispatch) {
    return {
     
       
        addlat: () => dispatch({ type: 'add_lat' ,value:lat}),
        addlong: () => dispatch({ type: 'add_long',value:long }),
        addcity: () => dispatch({ type: 'add_city',value:city }),
    }
}

export default connect("", mapDispatchToProps)(Location)