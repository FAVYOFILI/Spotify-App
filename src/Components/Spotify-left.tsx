// import IMAGE1 from "../assets/IMAGE 1.jpeg"
// // import IMAGE2 from "../assets/IMAGE 2.jpeg";
// // import IMAGE3 from "../assets/IMAGE 3.jpeg";
// // import IMAGE4 from "../assets/IMAGE 4.jpeg";
// // import IMAGE5 from "../assets/IMAGE 5.jpeg";
// // import IMAGE6 from "../assets/IMAGE 6.jpeg";
// // import IMAGE7 from "../assets/IMAGE 7.jpeg";
// // import IMAGE8 from "../assets/IMAGE 8.jpeg";
// // import IMAGE9 from "../assets/IMAGE 9.jpeg";





// const Spotifyleft: React.FC = () => {
//   return (
//     <main className="bg- w-[100%] flex">
//       {/* {Left Spotify} */}
//       <div className="h-[500px] w-[320px] bg-black ">
//         <div className="h-[400px] w-[300px] bg-[#121212] ml-[10px] rounded-md"></div>
//       </div>

//       {/* {Spotify Cover} */}
//       <div className="w-[80%] bg-black  ">
//         {/* {Inner Spotify} */}
//         <div className=" w-[1000px] bg-[#121212] ml-[10px] rounded-md justify-center flex flex-col h-auto overflow-auto ">
//           {/* {All Music Podcasts} */}
//           <div className="h-[60px] w-[900px] mt-[20px] gap-5  flex">
//             {/* {Buttons} */}
//             <button className="h-[34px] w-[43px] bg-white rounded-3xl text-black hover:cursor-pointer">
//               All
//             </button>
//             <button className="h-[34px] w-[70px] bg-black rounded-3xl items-center text-white hover:cursor-pointer">
//               Music
//             </button>
//             <button className="h-[34px] w-[90px] bg-black rounded-3xl text-white hover:cursor-pointer">
//               Podcasts
//             </button>
//           </div>
//           {/* {Made for you} */}
//           <div className="h-[350px] w-[250px] bg-white rounded-2xl items-center justify-center ml-[30px]">
//             Made For <br />
//             <h1 className="">Favour Ofili</h1>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
//           </div>

//           {/* {Popular Albums and Singles} */}
//           <div className=" ml-[30px] flex justify-between items-center">
//             <h1></h1>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]  ">
//               <img src={IMAGE1} className="" />
//             </div>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]">
//               {/* <img src={IMAGE2} className="" /> */}
//             </div>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
//           </div>

//           <div className=" ml-[30px] flex justify-between items-center">
//             {" "}
//             <h1></h1>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]  "></div>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
//           </div>

//           <div className=" ml-[30px] flex justify-between items-center">
//             <div className="h-[200px] w-[200px] bg-white  ml-[20px]  mt-[20px] rounded-[50%] "></div>
//             <div className="h-[200px] w-[200px] bg-white ml-[20px]  mt-[20px] rounded-[50%]"></div>
//             <div className="h-[200px] w-[200px] bg-white  ml-[20px]  mt-[20px] rounded-[50%]"></div>
//             <div className="h-[200px] w-[200px] bg-white ml-[20px]  mt-[20px] rounded-[50%]"></div>
//             <div className="h-[200px] w-[200px] bg-white ml-[20px]  mt-[20px] rounded-[50%]"></div>
//           </div>

//           <div className=" ml-[30px] flex justify-between items-center">
//             {" "}
//             <h1></h1>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]  "></div>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
//             <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
//           </div>
//         </div> 
//       </div>
//     </main>
//   );
// };

// export default Spotifyleft;


import { GoPlus } from "react-icons/go";
// import spotify from "./assets/spotify.png"

const Hero = () => {
  return (
    <>
      <div className="flex justify-between bg-[#121212] ">
        <div className="w-100 h-120 bg-[#121212] flex items-center gap-10 text-white flex-col">
          <div className="w-90 h-10 bg-[#121212] flex justify-between items-center">
            <p className="font-bold text-xl">Your Library</p>
            <GoPlus className="w-5 h-5" />
          </div>
          <div className="w-90 h-40 rounded-2xl mt- bg-[#1f1f1f]  ">
            <p className="ml-5 mt-5 text-white font-bold text-xl">
              {" "}
              Create Your First Playlist
            </p>
            <p className="ml-5 mt-3 text-white ">It's easy we'll help you</p>
            <button className=" ml-5 mt-3 w-35 h-8  bg-white text-black cursor-pointer font-medium rounded-4xl shadow-md">
              Create Playlist
            </button>
          </div>
          <div className="w-90 h-40 rounded-2xl mt- bg-[#1f1f1f]  ">
            <p className="ml-5 mt-5 text-white font-bold text-xl">
              Let's find some podcasts to follow
            </p>
            <p className="ml-5 mt-3 text-white ">
              We'll keep you updated on new episodes
            </p>
            <button className=" ml-5 mt-3 w-35 h-8  bg-white text-black cursor-pointer font-medium rounded-4xl shadow-md">
              Browse podcasts
            </button>
          </div>
        </div>
        {/* <img className="w-100% h-120 bg-[#121212]" src={spotify} /> */}
      </div>
    </>
  );
};
export default Hero;
// max-sm:[425px] overflow-hidden flex-col