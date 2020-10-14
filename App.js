import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import AddEntry from "./components/AddEntry";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers"

export default class App extends React.Component {
  state = {
    value: 0
  }
  componentDidMount(){
    console.log('Before')
    debugger
    console.log("After")
  }

  handlePress = () => {
    // alert("Hello!")
  }
  render(){
    return (
      <Provider store={createStore(reducer)}>
         <View  styles={styles.container}>
         <AddEntry />
         </View>
      </Provider>
 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: "#E53224",
     padding:10,
     paddingLeft: 50,
     paddingRight: 50,
     justifyContent: "center",
     alignItems: "center",
     borderRadius: 5
  },
  btnText: {
    color: "#fff"
  }
});