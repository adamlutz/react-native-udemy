import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from '../components/ColorCounter'

const INCREMENT_VAL = 10;

// state == { red: number, green: number, blue: number}
// action is how to change the state object
const reducer = (state, action) => {
    switch (action.colorToChange) {
      case 'red':
        return { ...state, red: state.red + action.amount }
      case 'blue':
        return { ...state, blue: state.blue + action.amount }
      case 'green':
        return { ...state, green: state.green + action.amount }
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
            onIncrease={() => dispatch({colorToChange: 'red', amount: INCREMENT_VAL})} 
            onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * INCREMENT_VAL})} 
        color="Red" />  

        <ColorCounter 
          onIncrease={() => dispatch({colorToChange: 'blue', amount: INCREMENT_VAL})} 
          onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * INCREMENT_VAL})} 
        color="Blue" />
        <ColorCounter 
          onIncrease={() => dispatch({colorToChange: 'green', amount: INCREMENT_VAL})} 
          onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * INCREMENT_VAL})} 
        color="Green" />
        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
    </View>
  )
};

const styles = StyleSheet.create({});

export default SquareScreen;
