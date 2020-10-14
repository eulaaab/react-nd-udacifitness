import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {FontAwesome, Entypo} from "@expo/vector-icons"

export default function UdaciStepper({max, unit, step, value, onIncrement, onDecrement}) {
  return (
   <View>
      <View>
      <TouchableOpacity onPress={onDecrement}>
        <FontAwesome name="minus" size={30} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="plus" onPress={onIncrement} size={30} color={"black"} />
      </TouchableOpacity>
    </View>
    <View>
      <Text>
        {value}
      </Text>
      <View>
        <Text>
          {unit}
        </Text>
      </View>
    </View>
   </View>
  )
}
