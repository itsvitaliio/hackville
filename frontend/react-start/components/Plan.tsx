import { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput, Button, Title } from 'react-native-paper'
import Timeline from 'react-native-timeline-flatlist'
import axios from 'axios'

import { config } from '../global'

const baseUrl = 'http://localhost:8000'
const readPlanUrl = `${baseUrl}/api/plan/read`
const addPlanUrl = `${baseUrl}/api/plan/add`

const Plan = () => {
  const [planData, setPlanData] = useState({})

  useFocusEffect(() => {
    const user = config.username
    axios.post(readPlanUrl, {
      username: user
    })
      .then((response) => {
        setPlanData(response.data)
      })
      .catch((error) => {
        // TODO: Let the user know there's an error
      })
  })

  return (
    <View style={styles.container}>
      <Title>
        Test
      </Title>
      <Timeline
        style={styles.list}
        data={planData}
        circleSize={35}
        dotSize={18}
        circleColor='rgb(45,156,219)'
        lineColor='rgb(45,156,219)'
        timeContainerStyle={{minWidth:52, marginTop: -5}}
        timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
        descriptionStyle={{color:'gray'}}
        innerCircle={'dot'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: 300,
    // maxWidth: '80%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  padding: {
    // flex: 2,
    marginVertical: 5,
    height: 1,
    width: '80%',
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
})

export default Plan
