<script src="http://localhost:8097" ></script>
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import { Appbar,TextInput  } from 'react-native-paper';


class Header1 extends React.Component{

render(){

  return(
    <Appbar.Header >
        
    <Appbar.Content
      title="Demo app qamar"
      subtitle="Weather Forcasting"
    />
   
  </Appbar.Header>
  )
}

}

export default Header1


