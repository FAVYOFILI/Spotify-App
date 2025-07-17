import SpotifyHeader from "./Components/Spotify-Header";
import Spotifyleft from "./Components/Spotify-left";
import  Spotifydown from "./Components/Spotifydown"
// import Spotify from "./Components/Spotify"
// import  Current from './Components/Radio'
import Spotify3 from "./Components/Spotify3";
import Music from "./Components/Music"



const App: React.FC = () => {
  return (
    <>
      <SpotifyHeader />
      <Spotifyleft/>
      <Music/>
      <Spotify3/>
      < Spotifydown/>
      {/* <Spotify/> */}
      {/* <Current/> */}
      <Spotify/>
      {/* <Spotify2/> */}
      <Spotify3/>


     
    </>
  );
};

export default App;
