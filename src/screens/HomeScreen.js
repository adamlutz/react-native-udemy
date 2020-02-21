import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation)

  // destructuring (es2015) -- pull out navigation object only from props object
  return (
    <View>
      <Button title='Components Demo'
      onPress={() => { navigation.navigate('Components')} } />
      
      <Button title='Images'
      onPress={() => { navigation.navigate('Images')} } />
      
      <TouchableOpacity
        onPress={() =>  { navigation.navigate('Lists')} } >
        <Text style={styles.text}>Go To List Demo</Text>
      </TouchableOpacity>
    </View>
  )};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
