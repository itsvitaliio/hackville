import React, {useState, useRef, useEffect} from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';
import { View, Text } from 'react-native';

function Player(props: any) {
    const audioEl: any = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <View style={{alignItems: 'center'}}>
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <Text style={{fontSize: 20, paddingBottom: 10}}>Playing now</Text>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <Text style={{padding: 5, fontSize: 16}}>Next up: <span>{props.songs[props.nextSongIndex].title}</span></Text>
        </View>
    )
}

export default Player;