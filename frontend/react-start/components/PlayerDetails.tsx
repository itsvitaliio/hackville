import React from 'react'
import { View, Text } from 'react-native'

function Playerdetails(props: any) {
    return (
        <View>
            <View>
                <img src={props.song.img_src} alt="" />
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 32, alignItems: 'center', padding: 10}}>{props.song.title}</Text>
            <Text style={{fontSize: 16}}>{props.song.artist}</Text>
        </View>
    )
}

export default Playerdetails
