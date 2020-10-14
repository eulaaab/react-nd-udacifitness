import React, { Component } from 'react';
import {TouchableOpacity, View, Text } from 'react-native';
import {getMetricMetaInfo, timeToString} from "../utils/helpers";
import UdaciSlider from "./UdaciSlider";
import UdacitySteppers from "./UdaciSteppers";
import DateHeader from "./DateHeader";
import {Ionicons} from "@expo/vector-icons";
import TextButton from "./TextButton";
import {submitEntry, removeEntry} from "../utils/api";
import {connect} from "react-redux";
import {addEntry, AddEntry} from "../actions"

function SubmitBtn ({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Submit</Text>
    </TouchableOpacity>
  )
}

class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim:0,
    sleep:0,
    eat:0
  }
  increment = (metric) => {
const {max, step} = getMetricMetaInfo(metric)
this.setState((state) => {
const count = state[metric] + step
return {
  ...state,
  [metric]: count > max ? max : count
}
} 
)
  }
  deccrement = (metric) => {  
    this.setState((state) => {
    const count = state[metric] - getMetricMetaInfo(metric).step
    return {
      ...state,
      [metric]: count < 0 ? 0 : count
    }
    } 
    )}

//slider for sleep and eat
slide =(metric, value) => {
this.setState(() => ({
[metric]: value,
})
)}

submit = () => {
 const key = timeToString();
 const entry = this.state
 
 //update redux
 this.setState(() => ({
  run: 0,
  bike: 0,
  swim:0,
  sleep:0,
  eat:0
 }))

 //navigate to home

 submitEntry = ({key, entry})

 //Clear local notification

}

reset = () => {
  const key = timeToString()

//updates Redux
  this.props.dispatch(addEntry({
    [key]: entry
  }))

  //route to Home

  //update 'DB' (AsyncStorage)
  removeEntry(key)
}

  render() {
    const metaInfo =getMetricMetaInfo()
    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons name="ios-happy"
          size={100} />
          <Text>
            You already logged your information for today
          </Text>
          <TextButton onPress={this.reset}>
            Reset
          </TextButton>
        </View>
      )
    }
    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()}/>

        {Object.keys(metaInfo).map((key) => {
          const {getIcon, type, ...rest} = metaInfo[key]
          const value = this.state[key]

          return (
            <View key={key}>            
              {getIcon()}
              {type ==="slider" ? <UdaciSlider value={value} onChange={(value) => this.slide(key,value)}
            {...rest}/> : <UdacitySteppers value={value }onIncrement={() => this.increment(key)}
          onDecrement ={() => this.deccrement(key)}
          {...rest}/>}
          </View>
          )
        }

        )}
        <SubmitBtn onPress={this.submit}/>
      </View>
    )
  }
}

export default connect()(AddEntry);
