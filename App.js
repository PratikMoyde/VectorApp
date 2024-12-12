import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from './src/component/VectorFile'

const App = () => {

  const Header = () => {
    return (
      <View style={styles.headerView}>
        <Text style={styles.titleText}>VectorIcon</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:50}}>
        <View style={styles.iconContainer}>
          <VectorIcon
            type={'AntDesign'}
            color={'black'}
            name={'tablet1'}
            size={100}
          />
          <VectorIcon
            type={'AntDesign'}
            color={'black'}
            name={'redenvelopes'}
            size={100}
          />
          <VectorIcon
            type={'AntDesign'}
            color={'black'}
            name={'adduser'}
            size={100}
          />
        </View>
        <View style={styles.iconContainer}>
          <VectorIcon
            type={'Entypo'}
            color={'red'}
            name={'500px'}
            size={90}
          />
          <VectorIcon
            type={'Entypo'}
            color={'red'}
            name={'add-user'}
            size={90}
          />
          <VectorIcon
            type={'Entypo'}
            color={'red'}
            name={'area-graph'}
            size={90}
          />
        </View>
        <View style={styles.iconContainer}>
          <VectorIcon
            type={'EvilIcons'}
            color={'green'}
            name={'archive'}
            size={80}
          />
          <VectorIcon
            type={'EvilIcons'}
            color={'green'}
            name={'comment'}
            size={80}
          />
          <VectorIcon
            type={'EvilIcons'}
            color={'green'}
            name={'paperclip'}
            size={80}
          />
        </View>
        <View style={styles.iconContainer}>
          <VectorIcon
            type={'Feather'}
            color={'pink'}
            name={'battery'}
            size={70}
          />
          <VectorIcon
            type={'Feather'}
            color={'pink'}
            name={'check-circle'}
            size={70}
          />
          <VectorIcon
            type={'Feather'}
            color={'pink'}
            name={'cloud-drizzle'}
            size={70}
          />
        </View>
        <View style={styles.iconContainer}>
          <VectorIcon
            type={'FontAwesome'}
            color={'purple'}
            name={'user'}
            size={60}
          />
          <VectorIcon
            type={'FontAwesome'}
            color={'purple'}
            name={'headphones'}
            size={60}
          />
          <VectorIcon
            type={'FontAwesome'}
            color={'purple'}
            name={'download'}
            size={60}
          />
        </View>
        <View style={styles.iconContainer}>
          <VectorIcon
            type={'FontAwesome5'}
            color={'orange'}
            name={'angry'}
            size={50}
          />
          <VectorIcon
            type={'FontAwesome5'}
            color={'orange'}
            name={'arrow-circle-down'}
            size={50}
          />
          <VectorIcon
            type={'FontAwesome5'}
            color={'orange'}
            name={'backward'}
            size={50}
          />
        </View>
        <View style={styles.iconContainer}>
          <VectorIcon
            type={'Fontisto'}
            color={'lightgreen'}
            name={'acrobat-reader'}
            size={40}
          />
          <VectorIcon
            type={'Fontisto'}
            color={'lightgreen'}
            name={'disqus'}
            size={40}
          />
          <VectorIcon
            type={'Fontisto'}
            color={'lightgreen'}
            name={'flipboard'}
            size={40}
          />
        </View>
        <View style={styles.iconContainer}>
          <VectorIcon
            type={'Octicons'}
            color={'skyblue'}
            name={'accessibility'}
            size={30}
          />
          <VectorIcon
            type={'Octicons'}
            color={'skyblue'}
            name={'apps'}
            size={30}
          />
          <VectorIcon
            type={'Octicons'}
            color={'skyblue'}
            name={'browser'}
            size={30}
          />
        </View>
        <View style={styles.iconContainer}>
          <VectorIcon
            type={'MaterialCommunityIcons'}
            color={'gray'}
            name={'account-box'}
            size={20}
          />
          <VectorIcon
            type={'MaterialCommunityIcons'}
            color={'gray'}
            name={'account-circle'}
            size={20}
          />
          <VectorIcon
            type={'MaterialCommunityIcons'}
            color={'gray'}
            name={'account-eye'}
            size={20}
          />
        </View>
        <View style={styles.iconContainer}>
          <VectorIcon
            type={'Ionicons'}
            color={'red'}
            name={'accessibility'}
            size={10}
          />
          <VectorIcon
            type={'Ionicons'}
            color={'red'}
            name={'albums-outline'}
            size={10}
          />
          <VectorIcon
            type={'Ionicons'}
            color={'red'}
            name={'airplane-sharp'}
            size={10}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: 48,
    marginTop: 48,
    width: '100%',
    borderBottomWidth: 1.5,
    justifyContent: 'center',
    borderColor: '#ccc',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 16,
  },
  iconContainer: {
    minHeight: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
})