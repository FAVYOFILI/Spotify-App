
// // import { GoBell } from "react-icons/go";
// import SpotifyIcon1 from "../assets/SpotifyIcon1.png";
// import SpotifyIcon2 from "../assets/SpotifyIcon2.png";
// // import SpotifySearch from "../assets/SpotifySearch.png"


// const SpotifyHeader: React.FC = () => {
//   return (
//     <main className="bg-[#000000] h-[65px] w-[100%] flex justify-between items-center ">
//       <div className="  items-center ">
//         <img src={SpotifyIcon1} className="h-[50px] w-[80px]" />
//       </div>

//       <div className="items-center h-[50px] w-[50px] rounded-4xl bg-[#1f1f1f]  justify-center flex">
//         <img
//           src={SpotifyIcon2}
//           className="h-[35px] w-[35px] justify-center items-center flex hover:cursor-pointer"
//         />
//       </div>

//       <input
//         type="text"
//         placeholder="What do you want to Play? "
//         className="h-[50px] w-[450px] bg-[#1f1f1f] flex items-center rounded-3xl />"
//       />
//       <div className="w-[430px] h-[50px] rounded-2xl bg-amber-400 justify-between items-center flex  ">
//         <button className=" h-[30px] w-[130px] bg-white rounded-3xl justify-center item-center flex hover:cursor-pointer">
//           Explore Premium
//         </button>
//         <button className=" h-[30px] w-[100px] bg-white rounded-3xl justify-center item-center flex hover:cursor-pointer ">
//           <img src="" alt="" />
//           Install
//         </button>
//         {/* <img src={} className="" />
//         <img src={} className="" />
//         <img src={} className="" /> */}
//       </div>
//     </main>
//   );
// };

// export default SpotifyHeader;

// {
//   /* <GoBell /> */
// }


import { FaHouse } from "react-icons/fa6";
// import spotify from "./assets/spotify (2).png"
import { CiSearch } from "react-icons/ci";
import { GrInstallOption } from "react-icons/gr";

const SpotifyHeader = () => {
  return (
    <>
      <header className="w-100%  bg-whitetext-black h-20 p-5 flex justify-between items-center bg-[#000000] ">
        <div className=" flex w-30 h-10 justify-between  text-white ">
          {/* <img className="w-10 h-10" src={spotify} /> */}
          <div className="w-10 h-10 flex items-center justify-center rounded-4xl bg-[#121212]">
            <FaHouse className="w-5 h-5 " />
          </div>
        </div>

        <div className="w-100 h-11 flex  items-center rounded-2xl bg-[#121212] md:flex   ">
          <CiSearch className="w-10 h-5 text-white text-bold" />
          <input
            className="w-60 h-9 pl-2 rounded-2xl border-none outline-0 text-gray-300 "
            placeholder="What do you want to play"
          />
        </div>

        <nav className="align-bottom md:w-100% text-center overflow-hidden ">
          <ul className="flex gap-4 text-gray-500 font-bold ">
            <li className="hover:text-white cursor-pointer">Premium</li>
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">Download</li>
            <div className="flex  w-50 justify-around items-center">
              
                <li className="hover:text-white cursor-pointer flex items-center "><GrInstallOption/>Install App</li>
              
              <li className="hover:text-white cursor-pointer">Sign up</li>
            </div>
          </ul>
        </nav>

        <button className="py-3 px-9  bg-white text-black cursor-pointer font-medium rounded-4xl shadow-md">
          Login
        </button>
      </header>
    </>
  );
};
export default SpotifyHeader;
// max-sm:[425px] overflow-hidden