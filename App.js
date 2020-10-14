import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Slider from '@react-native-community/slider'
import AddEntry from "./components/AddEntry"

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
      <>
       <View  styles={styles.container}>
         <AddEntry />
       {
         /*
   <Slider 
   style={{width: 200, height: 40}}
   minimumValue={0}
   maximumValue={1}
   minimumTrackTintColor="#FFFFFF"
   maximumTrackTintColor="#000000"
   value ={this.state.value}
   onValueChange={(value) => this.setState(() => ({value}))}
   />
   <Text>
     Value: {this.state.value}
   </Text>
    <TouchableNativeFeedback 
       background={TouchableNativeFeedback.SelectableBackground()}
       onPress={this.handlePress} underlayColor="#d4271b">
         <View style={styles.btn} >

                <Text style={styles.btnText}>Touchable Highlight</Text>
         </View>
              </TouchableNativeFeedback>
        */ 
        }
    </View>
      </>
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