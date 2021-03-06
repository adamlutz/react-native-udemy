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

      <Button title='Counter'
      onPress={() => { navigation.navigate('Counter')} } />

      <Button title='Colors'
      onPress={() => { navigation.navigate('Colors')} } />
      
      <Button title='Squares'
      onPress={() => { navigation.navigate('Squares')} } />
            
      <Button title='Text'
      onPress={() => { navigation.navigate('Text')} } />
                  
      <Button title='Box'
      onPress={() => { navigation.navigate('Box')} } />
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
