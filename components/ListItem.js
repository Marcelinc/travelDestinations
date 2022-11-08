import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function ListItem({item}) {
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.name}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: 'rgba(143, 151, 170, 0.85)',
        borderBottomWidth: 1,
        borderColor: '#eee',
        underlayColor: 'blue',
        activeOpacity: 1
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    }
})

export default ListItem