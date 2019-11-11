<script src="http://localhost:8097" ></script>
import * as React from 'react';
import {  ImageBackground ,StyleSheet, Text, View, ScrollView, Image,AsyncStorage , Picker } from 'react-native';
import { Appbar,TextInput   } from 'react-native-paper';
import Header1 from './header1'
import Location from './location'
import { connect } from 'react-redux'


var city =""
var lat= ""
var long= ""


var notrender = true
class Home extends React.Component {
state={
  cloudinfo:{ 
    name:'',
    temp:'',
    max_temp:'',
    min_temp:'',
    humidity:'',
    country:'',
    timezone:'',
    weather:'',
    icon:'',
    windspeed: '',
    lat:'',
    lon:''


  },
  shouldcom : true,
  language:"",
  name:"",

  des1:true
  

}



waitasync = ()=>{
  var value1 
   var promise1 = new  Promise((res,reg)=>{
         (async()=>{
        value1 = await AsyncStorage.getItem('city');
      


        res()
     })();
    
    
   }).then(x=>{
     

  if (value1 !== null) {
    // We have data!!
   
    city=value1
    this.updateweather()

    

  }
  else{
    city = "Rawalpindi, Pakistan"
    this.updateweather()
  }

   })
  

}


updateweather= ()=>{
    


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=b69aab868b19f07233065b34a3a9b0e6`).then(x=>x.json().then(b=>{

if(b.cod != "404")
{

    long = b.coord.lon
    lat = b.coord.lat;


 
 
this.setState({
  cloudinfo:{
   name:b.name,
   temp: Math.floor(b.main.temp),
   max_temp:Math.ceil(b.main.temp_max),
   min_temp:Math.floor(b.main.temp_min),

   humidity:b.main.humidity,
   country:b.sys.country,
   timezone:b.timezone,
   weather:b.weather[0].description,
   icon:b.weather[0].icon,
   windspeed: b.wind.speed
   


  },
  des1:false
})
this.props.addlat()
this.props.addlong()
this.props.addcity()
}
else{
  this.setState(
    
    {
      des1:true,
      name:b.message

    })

}

  }))
}

componentWillMount(){
  
console.log(this.props.counter)

}

otherstage = ()=>{



    
  
      city=this.props.cityname
    
   
      this.updateweather()
      
  
  
};


componentDidMount(){

   this.waitasync()

}

componentWillUpdate(){


 
}


componentDidUpdate(){


}


render(){


  


  return (
    <View>
   
  
    <ImageBackground source={{uri:("https://i.pinimg.com/originals/e5/05/63/e5056332cda4cfa3ba1417b4aa43cdf2.jpg")}} style={{width: '100%', height: '100%'}}>
    <Location  qamar={this.otherstage}   />

    <View style={{flex:1,color:'#fff',borderColor:'#3e3e3e45',margin:20,marginTop:0,padding:10, borderWidth:1,backgroundColor:"#0000005c",marginBottom:48}}>
    
    
     {
      (()=>{
   
        if(!this.state.des1)
      {
        return(
             <View style={{flex:1,justifyContent:"space-between"}}>
             <Text style={styles.city_name}>{this.state.cloudinfo.name}</Text>
  

  <View>
          <View style={styles.topplace}>
         <Image style={{height:70,width:70}} source={{uri:(`http://openweathermap.org/img/w/${this.state.cloudinfo.icon}.png`)}} /> 
  
         <Text  style={styles.des}>{this.state.cloudinfo.weather}</Text>
         </View> 


     <View style={{flexDirection:"row",justifyContent:"space-between"}}>
     <View style={{flexDirection:"row"}} >
    <Text  style={styles.currtemp} >{this.state.cloudinfo.temp}</Text>
    	
<Text style={{fontSize: 25, lineHeight: 28,color:'#fff'}}>o</Text>
</View>
    <View style={{marginRight:20}}>
    <View style={{flexDirection:'row',borderBottomWidth:2,borderColor:'#fff'}}>
   <Text style={{ color:'#fff',fontSize:20,borderBottomColor:'#fff'}}>{this.state.cloudinfo.max_temp}</Text>
   <Text style={{fontSize: 10, color:'#fff',marginTop:0}}>o</Text>
   <Text style={{ color:'#fff',fontSize:20,borderBottomColor:'#fff'}}>C</Text>
    </View>
    <View style={{flexDirection:'row'}}>
   <Text style={{ color:'#fff',fontSize:20}}>{this.state.cloudinfo.min_temp}</Text>
   <Text style={{fontSize: 10, color:'#fff',marginTop:0}}>o</Text>
   <Text style={{ color:'#fff',fontSize:20,borderBottomColor:'#fff'}}>C</Text>
   
    </View>

    </View> 
    </View>

    </View>

     <View  style={{}}>
    <Text style={{ color:'#fff',fontSize:20}}>Humidity : {this.state.cloudinfo.humidity} %</Text>
   <Text style={{color:'#fff',fontSize:20}}>Wind Speed : {this.state.cloudinfo.windspeed} Km/h</Text>
  
     </View>

       </View>




        )

      }
      else{
        return(  <Text style={styles.city_name}>{this.state.name}</Text> )
      }
      })()
     
    }

     
    </View>
    </ImageBackground>

 
  
  
   

  
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
    currtemp:{
      fontSize:150,
      marginTop:-50,
      color:'#fff'
   

    },
    des:{
    fontSize:20,
    textTransform:"capitalize",
    marginTop:20,
    color:'#fff'
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

function mapDispatchToProps(dispatch) {
    return {
        addlat: () => dispatch({ type: 'add_lat' ,value:lat}),
        addlong: () => dispatch({ type: 'add_long',value:long }),
        addcity: () => dispatch({ type: 'add_city',value:city }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)