import React, { Component } from 'react';
import {View, } from 'react-native';
import {getMetricMetaInfo} from "../utils/helpers";
import UdaciSlider from "./UdaciSlider"
import UdacitySteppers from "./UdaciSteppers"

export default class AddEntry extends Component {
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


  render() {
    const metaInfo =getMetricMetaInfo()
    return (
      <View>
        {Object.keys(metaInfo).map((key) => {
          const {getIcon, type, ...rest} = metaInfo[key]
          const value = this.state[key]

          return (
            <View key={key}>
              {getIcon()}
              {type ==="slider" ? <UdaciSlider value={value} onChage={(value) => this.slide(key,value)}
            {...rest}/> : <UdacitySteppers value={value }onIncrement={() => this.increment(key)}
          onDecrement ={() => this.deccrement(key)}
          {...rest}/>}
            
              </View>
          )
        }

        )}
        
      </View>
    )
  }
}
