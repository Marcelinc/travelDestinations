import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Destination({navigation, route}) {
  return (
    <View style={styles.container}>
        <Text>Destination {route.params.item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})

export default Destination