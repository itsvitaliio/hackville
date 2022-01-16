import { useEffect, useRef, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput, Button, Title } from 'react-native-paper'
import Timeline from 'react-native-timeline-flatlist'
import axios from 'axios'

import { config } from '../global'

const baseUrl = 'http://localhost:8000'
const readPlanUrl = `${baseUrl}/api/plan/read`
const addPlanUrl = `${baseUrl}/api/plan/add`

const tempData = [
  { time: '8:00', title: 'Wake up', description: 'Rise and Shine! Today is going to be a good day.', circleColor: '#009688', lineColor: '#009688' },
  { time: '8:45', title: 'Morning Workout', description: 'A quick stretch to get those limbs ready.' },
  { time: '9:00', title: 'CHEM 101', description: 'Revise notes before class.' },
  { time: '10:00', title: 'GROUP PROJ. MEETING', description: 'Meet up team for presentation prep.' },
  { time: '11:00', title: 'Snack', description: 'Get a granola bar from nearest salad bar.'},
  { time: '14:00', title: 'CALC 235', description: 'Do 5 practice problems before class.', lineColor: '#009688' },
  { time: '16:30', title: 'COMPSCI 230', description: 'Upload homework before class. Remember to make lecture notes & flash cards.' },
  { time: '18:00', title: 'Meet friend', description: 'Hang out and practice football.', circleColor: '#009688' },]

// const tempDataButBetter = [
//   { time: '19:00', title: 'Buy More Milk', description: 'Probably get some extra coffee too...', circleColor: '#009688' },
// ]

const Plan = () => {
  const [planData, setPlanData] = useState({})

  useEffect(() => {
    // console.log('useEffect called!')

    axios.post(readPlanUrl, {
      username: config.username
    })
      .then((response) => {
        console.log(response)
        setPlanData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    console.log('Plan Data updated!')
  }, [planData])

  return (
    <View style={styles.container}>
      <Timeline
        style={styles.list}
        data={tempData}
        circleSize={35}
        dotSize={18}
        circleColor='rgb(45,156,219)'
        lineColor='rgb(45,156,219)'
        timeContainerStyle={{
          minWidth: 52,
          marginTop: -5
        }}
        timeStyle={{
          textAlign: 'center',
          backgroundColor: '#ff9797',
          color: 'white',
          padding: 5,
          borderRadius: 13
        }}
        descriptionStyle={{ color: 'gray' }}
        innerCircle={'dot'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
		paddingTop: 65,
    // backgroundColor: 'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
})

export default Plan
