<script src="http://localhost:8097" ></script>
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, AsyncStorage ,ImageBackground , Button } from 'react-native';
import { Appbar,TextInput  } from 'react-native-paper';
import Location from './location'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import Flag from 'react-native-flags';


class Time extends React.Component{

state={
 time:"",
 date:"",
 country:"" ,
 cc:"",
 zone:""

 

}  






componentWillMount(){

 
  console.log(this.props)

  fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=KP6U7F84A1PR&format=json&by=position&lat=${this.props.latvalue}&lng=${this.props.longvalue}`).then(x=>x.json()).then(b=>{

 this.setState({
      time:b.formatted.split(" ")[1],
      date:b.formatted.split(" ")[0],
      country:b.countryName,
      cc:b.countryCode,
      zone:b.zoneName

     })


  })
 
}

componentWillUpdate(){

  fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=KP6U7F84A1PR&format=json&by=position&lat=${this.props.latvalue}&lng=${this.props.longvalue}`).then(x=>x.json()).then(b=>{

 this.setState({
      time:b.formatted.split(" ")[1],
      date:b.formatted.split(" ")[0],
      country:b.countryName,
      cc:b.countryCode,
      zone:b.zoneName

     })


  })
}
render(){

  return(
  
  
  
    <View style={{flex:1,color:'#fff',borderColor:'#3e3e3e45',margin:20,marginTop:0,padding:10, borderWidth:1,backgroundColor:"#0000005c",marginBottom:48}}>
  
    {
       (()=>{
        if(this.state.time!="")
        {
          return(


     <View  style={{justifyContent:"space-between",flexDirection:"column",flex:1}}>
     <View>
  <Text style={styles.city_name}>{this.props.cityname}</Text>
         
           <Flag  style={styles.countrty_name1} code={this.state.cc} size={32}  />
           <Text style={styles.countrty_name}>{this.state.country}</Text>

           </View>
           
           <View style={{flexDirection:"column"}} >
           <View style={{flexDirection:"row",marginLeft:5,}}>
           

           <Icon name="calendar" size={15} color="#fff" />
           <Text  style={styles.des}>{this.state.date}</Text>
           </View>
        
           
  <Text  style={styles.currtemp} >{this.state.time}</Text>

    </View>


    
    <View  style={{}}>

   <Text style={{color:'#fff',fontSize:20}}> <Icon name="clock" style={{fontSize:15}}/> : {this.state.zone} </Text>
  
     </View>
    </View>




)


        }
      })()
             
        }
 
</View>
  

   
  )
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
      padding:50
    },

    city_name:{
      fontSize:25,
     textTransform:"uppercase",
alignSelf:"center",
     color:'#fff',
     marginTop:10,
     borderBottomColor:'#fff',
     borderBottomWidth:1


    },
    countrty_name:{
      fontSize:20,
      textTransform:"capitalize",
 alignSelf:"center",
      color:'#fff',
      marginTop:10,
     

    },
    countrty_name1:{
  
      textTransform:"capitalize",
 alignSelf:"center",
      color:'#fff',
      marginTop:10,
     

    },
    currtemp:{
      fontSize:75,
      marginTop:-20,
      color:'#fff',
      
   

    },
    des:{
    fontSize:20,
    textTransform:"capitalize",
    marginTop:-5,
    color:'#fff',
    paddingLeft:10
    },
    topplace:{
      flexDirection:"row",

   
    }



  });

  function mapStateToProps(state) {
    return {
        latvalue: state.lat,
        longvalue: state.lang,
        cityname:  state.city
    }
}



export default connect(mapStateToProps, "")(Time)