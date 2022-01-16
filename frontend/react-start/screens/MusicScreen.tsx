import React, { useEffect, useState } from "react";
import { View } from 'react-native'
import Player from '../components/Player';


function MusicScreen() {
  const [songs] = useState([
    {
      title: "Calm Forest Sounds",
      img_src: require("./images/forest.jpg"),
      src: require("./music/forest.mp3")
    },
    {
      title: "Calm Ocean Sounds",
      img_src: require("./images/ocean.jpg"),
      src: require("./music/ocean.mp3")
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      }
      else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    // <div className="App">
    <View style={{flex: 1}}>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </View>
    // </div>
  )
}

export default MusicScreen;
