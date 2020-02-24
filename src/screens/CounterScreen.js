import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const reducer = (state, action) => {
  return { ...state, counter: state.counter + action.payload }
};

const CounterScreen = () => {

  // by default react does not automatically watch vars
  // enter useState
  
  // array destructuring example:
  const [state, dispatch] = useReducer(reducer, { counter: 0 })

  return (
    <View>
        <Button title="increase" onPress={() => {
          dispatch({type: 'increment', payload: 1})
        }} />
        <Button title="decrease" onPress={() => {
          dispatch({type: 'decrement', payload: -1})
        }} />
        
        <Text>Current Count: {state.counter}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default CounterScreen;
