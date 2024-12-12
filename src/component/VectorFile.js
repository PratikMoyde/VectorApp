import {View} from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Feather from 'react-native-vector-icons/dist/Feather'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons'
import Octicons from 'react-native-vector-icons/dist/Octicons'
import Fontisto from 'react-native-vector-icons/dist/Fontisto'

// Global component for getting vector icons
const VectorIcon = props => {
  const {name, size, color, type, onPress, style} = props
  return (
    <View style={style}>
      {type === 'MaterialCommunityIcons' ? (
        <MaterialCommunityIcons suppressHighlighting={true} onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'FontAwesome' ? (
        <FontAwesome suppressHighlighting={true} onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'FontAwesome5' ? (
        <FontAwesome5 suppressHighlighting={true} onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Feather' ? (
        <Feather suppressHighlighting={true} onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'AntDesign' ? (
        <AntDesign suppressHighlighting={true} onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Entypo' ? (
        <Entypo suppressHighlighting={true} onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Ionicons' ? (
        <Ionicons suppressHighlighting={true} onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'EvilIcons' ? (
        <EvilIcons suppressHighlighting={true} onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Octicons' ? (
        <Octicons suppressHighlighting={true} onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Fontisto' ? (
        <Fontisto suppressHighlighting={true} onPress={onPress} name={name} size={size} color={color} />
      ) : (
        <MaterialIcons suppressHighlighting={true} onPress={onPress} name={name} size={size} color={color} />
      )}
    </View>
  )
}

export default VectorIcon