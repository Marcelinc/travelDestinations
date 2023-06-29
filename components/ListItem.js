import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/dist/AntDesign'

const {width: SCREEN_WIDTH} = Dimensions.get('window')
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * .3
const ITEM_HEIGHT = 60

function ListItem({item, navigation, onDismiss, simultaneousHandlers}) {

    const translateX = useSharedValue(0) //value shared between react native side and native side
    const itemHeight = useSharedValue(ITEM_HEIGHT)
    const iconPadding = useSharedValue(4)
    const itemMargin = useSharedValue(5)
    
    const rowStyle = useAnimatedStyle(() => ({
        transform: [
            {translateX: translateX.value}
        ]
    }))

    const rIconContainer = useAnimatedStyle(() => {
        const opacity = withTiming(translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0);
        return {opacity}
    })

    const rItemContainer = useAnimatedStyle(() => {
        const height = itemHeight.value
        return {
           height,
           margin: itemMargin.value,
        }
    })

    const rIconBackground = useAnimatedStyle(() => {
        return {
            padding: iconPadding.value
        }
    })

    const panGesture = useAnimatedGestureHandler({
        onActive: (event) => {
            translateX.value = event.translationX
        },
        onEnd: () => {
            const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD
            if(shouldBeDismissed){
                translateX.value = withTiming(-SCREEN_WIDTH)
                itemHeight.value = withTiming(0)
                iconPadding.value = withTiming(0)
                itemMargin.value = withTiming(0,undefined, isFinished => {
                    if(isFinished && onDismiss){
                        runOnJS(onDismiss)(item)
                    }
                })
            }else{
                translateX.value = withTiming(0)
            }
        }
    })

  return (
    <Animated.View /*onPress={() => navigation.navigate('Destination',{item: item})}*/ style={rItemContainer}>
        <Animated.View style={[styles.iconContainer,rIconContainer]}>
            <Animated.View style={[styles.iconBackground,rIconBackground]}>
                <Icon name='delete' size={23} color={'darkred'}/>
            </Animated.View>
        </Animated.View>
        <PanGestureHandler simultaneousHandlers={simultaneousHandlers} onGestureEvent={panGesture}>
            <Animated.View style={[styles.listItemView,styles.listItem,rowStyle]}>
                <Text style={styles.listItemText}>{item.name}</Text>
            </Animated.View>
        </PanGestureHandler>
        
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: 'rgba(143, 151, 170, 0.85)',
        borderBottomWidth: 1,
        borderColor: '#eee',
        underlayColor: 'blue',
        activeOpacity: 1,
        height: ITEM_HEIGHT,
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18, 
    },
    iconContainer: {
        position: 'absolute',
        right: 10,
        height: '100%',
        justifyContent:'center',
        justifyContent:'center',
        alignItems: 'center',
    },
    iconBackground: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 5,
    }
})

export default ListItem