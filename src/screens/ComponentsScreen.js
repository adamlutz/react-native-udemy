import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    
    // only thing you can't pass is obj to var
    // const greeting = ['asdf', 'bb'];
    const greeting = 'has to go into {}';
    const jsx_elem = <Text>hello to YOU!</Text>;

    // can either do return ( jsx ... ) or w/o )'s
    return <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text style={{fontSize: 30 }}>{greeting}</Text>
      {jsx_elem}
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14
    }
});

export default ComponentsScreen;