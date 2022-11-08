import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header({title}) {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
    </View>
  )
}

Header.defaultProps = {
    title: 'Travel Destinations'
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'rgba(17, 84, 226, 0.8)'
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center'
    }
})

export default Header