import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from '../components/ColorCounter'

const INCREMENT_VAL = 10;

// state == { red: number, green: number, blue: number}
// action is how to change the state object
// community convention is 'type' + 'payload' in reducer dispatch
const reducer = (state, action) => {
    switch (action.type) {
      case 'red':
        return { ...state, red: state.red + action.payload }
      case 'blue':
        return { ...state, blue: state.blue + action.payload }
      case 'green':
        return { ...state, green: state.green + action.payload }
      default:
        return state;
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red:0, blue:0, green:0});
    const { red, green, blue } = state;

    // generally, we create state vars in the most parent component 
    // that needs to read or change a state value
    return (
    <View>
        <Text>Square Screen</Text>
        <ColorCounter 
            onIncrease={() => dispatch({type: 'red', payload: INCREMENT_VAL})} 
            onDecrease={() => dispatch({type: 'red', payload: -1 * INCREMENT_VAL})} 
        color="Red" />  

        <ColorCounter 
          onIncrease={() => dispatch({type: 'blue', payload: INCREMENT_VAL})} 
          onDecrease={() => dispatch({type: 'blue', payload: -1 * INCREMENT_VAL})} 
        color="Blue" />
        <ColorCounter 
          onIncrease={() => dispatch({type: 'green', payload: INCREMENT_VAL})} 
          onDecrease={() => dispatch({type: 'green', payload: -1 * INCREMENT_VAL})} 
        color="Green" />
        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
    </View>
  )
};

const styles = StyleSheet.create({});

export default SquareScreen;
