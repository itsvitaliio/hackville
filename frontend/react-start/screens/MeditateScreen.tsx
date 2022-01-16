import React, { useEffect, useState } from "react"
import { ImageBackground, View } from 'react-native'
import Player from '../components/Player'
import { config } from "../global";


function MeditateScreen() {
  const [songs] = useState([
    {
      title: "Calm Forest Sounds",
      img_src: require("../assets/meditation-cards/forest.jpg"),
      src: require("../assets/meditation-music/forest.mp3")
    },
    {
      title: "Calm Ocean Sounds",
      img_src: require("../assets/meditation-cards/ocean.jpg"),
      src: require("../assets/meditation-music/ocean.mp3")
    }
  ])

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
    <ImageBackground
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      source={config.background}
    >
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </ImageBackground>
    // </div>
  )
}

export default MeditateScreen;
