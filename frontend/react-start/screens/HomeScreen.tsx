import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, Image, View, FlatList, Pressable, ImageBackground } from 'react-native'
import { Card } from 'react-native-paper'

const background = { uri: '' }

const items = [
  { name: 'Calendar', redirect: 'Calendar', image: { uri: require('../assets/home-icons/calendar.png') } },
  { name: 'Timeline', redirect: 'Plan', image: { uri: require('../assets/home-icons/arm.png') } },
  { name: 'Study Notes', redirect: 'Notes', image: { uri: require('../assets/home-icons/book.png') } },
  { name: 'Meditate', redirect: 'Meditate', image: { uri: require('../assets/home-icons/bot.png') } },
  { name: 'Reminders', redirect: 'Remind', image: { uri: require('../assets/home-icons/clock.png') } },
  { name: 'Music', redirect: 'Music', image: { uri: require('../assets/home-icons/headphones.png') } },
]

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
      >
        <FlatList
          data={items}
          contentContainerStyle={styles.flatList}
          renderItem={({ item }) => (
            <Pressable
              style={styles.pressable}
              onPress={() => navigation.navigate(item.redirect)}
            >
              <Card style={styles.card}>
                <Card.Cover
                  style={styles.cardCover}
                  source={item.image}
                />
                <Card.Content style={styles.cardContent}>
                  {item.name}
                </Card.Content>
              </Card>
            </Pressable>
          )}
          numColumns={2}
        // keyExtractor={(item, index) => index}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // minWidth: '100%',
  },
  flatList: {
    flexGrow: 1,
    // alignItems: 'stretch',
    // justifyContent: 'space-around',
    marginStart: '10%',
    marginEnd: '10%',
  },
  pressable: {
    flex: 1,
    // justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
    // maxWidth: 300
  },
  card: {
    flex: 1,
    marginBottom: 25,
    marginHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    // maxWidth: 300,
  },
  cardContent: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    minWidth: 150,
    // paddingTop: 25,
    // maxWidth: '50%'
  },
  cardCover: {
    flex: 1,
    // alignItems: 'stretch',
    justifyContent: 'space-between',
    marginHorizontal: '20%',
    // minHeight: 200,
    // maxWidth: '70%',
  }
  // text: {
  //   justifyContent: 'space-between',
  // },
  // imageThumbnail: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 100,
  //   margin: 5,
  //   backgroundColor: '#00BCD4'
  // },
  // gridViewContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: 100,
  //   margin: 5,
  //   backgroundColor: '#7B1FA2'
  // },
  // gridViewTextLayout: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   justifyContent: 'center',
  //   color: '#fff',
  //   // padding: 10,
  // }
});

export default HomeScreen
