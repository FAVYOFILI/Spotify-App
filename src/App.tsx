import SpotifyHeader from "./Components/Spotify-Header";
import Spotifyleft from "./Components/Spotify-left";
import  Spotifydown from "./Components/Spotifydown"
// import Spotify from "./Components/Spotify"



const App: React.FC = () => {
  return (
    <>
      <SpotifyHeader />
      <Spotifyleft/>
      < Spotifydown/>
      {/* <Spotify/> */}
     
    </>
  );
};

export default App;
