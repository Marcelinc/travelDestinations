import React, {useState} from 'react'
import { View, ImageBackground, FlatList, StyleSheet, Alert } from 'react-native'
import AddDestination from './AddDestination'
import Header from './Header'
import ListItem from './ListItem'
import backgroundImage from '../resource/bg.jpeg'

function Home({navigation}) {

    const [destinations,setDestinations] = useState([
        {id:1, name: 'Trollstigen'},
        {id:2, name: 'Vøringsfossen'},
        {id:3, name: 'Stegastein'},
        {id:4, name: 'Gaularfjellet'},
      ])

      const addItem = name => {
        let id = destinations.length+1
        if(name != '')
          setDestinations([{id,name},...destinations])
        else
          Alert.alert('Error','Please give destination name',[{text: 'Ok'}])
      }

  return (
    <View style={styles.container}>
        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.image}>
        <Header/>
        <AddDestination addItem={addItem}/>
        <FlatList 
            data={destinations} style={styles.list}
            renderItem={({item}) => (<ListItem item={item} navigation={navigation}/>)}
        />
        </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex:1, 
    },
    text: {
      color: 'green',
      fontSize:30
    },
    img: {
      width: 100,
      height:100,
      borderRadius: 20
    },
    image: {
      flex: 1,
    },
    list: {
      marginHorizontal: 40,
      marginTop: 40
    }
  })

export default Home