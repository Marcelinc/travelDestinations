import React, {useState} from 'react'
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/AntDesign'

function AddDestination({addItem}) {

    const [destination,setDestination] = useState('')

    const onChange = textValue => setDestination(textValue)

  return (
    <View style={styles.container}>
        <TextInput placeholder='Add new one' style={styles.input} onChangeText={onChange}/>
        <TouchableOpacity style={styles.icon} onPress={() => addItem(destination)}>
            <Icon name="pluscircle" size={30} color="green"/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        
        width: 30
    },
    input: {
        backgroundColor: 'rgba(131, 201, 79, 0.8)',
        alignSelf: 'flex-start',
        margin: 15,
        borderRadius: 10,
        width: '70%'
    }
})

export default AddDestination