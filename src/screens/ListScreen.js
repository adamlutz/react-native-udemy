import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {

  const friends = [
      { name: 'dan', age: '1' },
      { name: 'tom', age: '2' },
      { name: 'warsch', age: '3' },
      { name: 'dan', age: '4' },
      { name: 'tom', age: '5' },
      { name: 'warsch', age: '6' },
      { name: 'dan', age: '7' },
      { name: 'tom', age: '8' },
      { name: 'warsch', age: '9' },
  ]
  // key are for performance optimizations
  // esp for making updates to list
  // horizontal / horizontal={true} property
  return (
    <FlatList
        keyExtractor={(friend) => friend.age}
        data={friends}
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - age {item.age}</Text>;
        }}>

    /></FlatList>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10
  }
});

export default ListScreen;
