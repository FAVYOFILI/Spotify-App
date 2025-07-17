
// import { GoBell } from "react-icons/go";
import SpotifyIcon1 from "../assets/SpotifyIcon1.png";
import SpotifyIcon2 from "../assets/SpotifyIcon2.png";
// import SpotifySearch from "../assets/SpotifySearch.png"


const SpotifyHeader: React.FC = () => {
  return (
    <main className="bg-[#000000] h-[65px] w-[100%] flex justify-between items-center ">
      <div className="  items-center ">
        <img src={SpotifyIcon1} className="h-[50px] w-[80px]" />
      </div>

      <div className="items-center h-[50px] w-[50px] rounded-4xl bg-[#1f1f1f]  justify-center flex">
        <img
          src={SpotifyIcon2}
          className="h-[35px] w-[35px] justify-center items-center flex hover:cursor-pointer"
        />
      </div>

      <input
        type="text"
        placeholder="What do you want to Play? "
        className="h-[50px] w-[450px] bg-[#1f1f1f] flex items-center rounded-3xl />"
      />
      <div className="w-[430px] h-[50px] rounded-2xl bg-amber-400 justify-between items-center flex  ">
        <button className=" h-[30px] w-[130px] bg-white rounded-3xl justify-center item-center flex hover:cursor-pointer">
          Explore Premium
        </button>
        <button className=" h-[30px] w-[100px] bg-white rounded-3xl justify-center item-center flex hover:cursor-pointer ">
          <img src="" alt="" />
          Install
        </button>
        {/* <img src={} className="" />
        <img src={} className="" />
        <img src={} className="" /> */}
      </div>
    </main>
  );
};

export default SpotifyHeader;

{
  /* <GoBell /> */
}
