import Maff from "../assets/Maff.jpeg";
import Current from "./Spotify4";
import Shallipopi from "../assets/Shallipopipoppi.jpeg";
import Jonn from "../assets/Jonn.jpeg";
import Kizz from "../assets/Kizz.jpeg";

const Popp = () => {
  return (
    <>
      <p className="bg-[#121212] flex items-center text-3xl font-bold text-white p-5 ">
        Current Artist
      </p>
      <div className="flex justify-around w-100% h-90 items-center bg-[#121212] ">
        <Current pic={Maff} names="Davido" art="Artist" />
        <Current pic={Shallipopi} names="Shallipopipopi" art="Artist" />
        <Current pic={Jonn} names="Asake" art="Artist" />
        <Current pic={Kizz} names="Seyi Vibez" art="Artist" />
      </div>
    </>
  );
};
export default Popp;
