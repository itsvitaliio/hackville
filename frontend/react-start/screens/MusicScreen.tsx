import { View, Text, ImageBackground } from 'react-native'
import { config } from '../global';

function MusicScreen() {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={config.background}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <iframe
          src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0"
          width="400"
          height="500"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </View>
    </ImageBackground>
  );
}

export default MusicScreen;