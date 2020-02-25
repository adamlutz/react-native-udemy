import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Text Screen</Text>
      <TextInput 
        style={styles.textInputStyle} 
        // ios feature flags
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue) } />
      <Text>My name is {name}</Text>
      { name.length < 4 ? <Text>not valid</Text> : null}
    </View>
  )
};

const styles = StyleSheet.create({
  textInputStyle: {
    margin: 15,
    borderColor: 'black', 
    borderWidth: 1
  }
});

export default TextScreen;
