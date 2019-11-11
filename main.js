
import * as React from 'react';
import Home from './home'
import { Provider } from 'react-redux'
import Store from './store'
class Main extends React.Component {

  render(){
    return (
      <Provider store={Store}>
      <Home />
      </Provider>
      ) 
     }

}

export default  Main




