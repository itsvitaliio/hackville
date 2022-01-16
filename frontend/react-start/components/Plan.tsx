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
  { time: '08:00', title: 'Wake up', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ', circleColor: '#009688', lineColor: '#009688' },
  { time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.' },
  { time: '12:00', title: 'Lunch' },
  { time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ', lineColor: '#009688' },
  { time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', circleColor: '#009688' }
]

const tempDataButBetter = [
  { time: '19:00', title: 'Buy More Milk', description: 'Probably get some extra coffee too...', circleColor: '#009688' },
]

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
