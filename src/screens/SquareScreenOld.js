import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from '../components/ColorCounter'

const INCREMENT_VAL = 10;

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    // generally, we create state vars in the most parent component 
    // that needs to read or change a state value
    return (
    <View>
        <Text>Square Screen</Text>
        <ColorCounter 
            onIncrease={() => setRed(red + INCREMENT_VAL)} 
            onDecrease={() => setRed(red - INCREMENT_VAL)} 
        color="Red" />

        <ColorCounter 
            onIncrease={() => setBlue(blue + INCREMENT_VAL)} 
            onDecrease={() => setBlue(blue - INCREMENT_VAL)} 
        color="Blue" />
        <ColorCounter 
            onIncrease={() => setGreen(green + INCREMENT_VAL)} 
            onDecrease={() => setGreen(green - INCREMENT_VAL)} 
        color="Green" />
        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  )
};

const styles = StyleSheet.create({});

export default SquareScreen;
