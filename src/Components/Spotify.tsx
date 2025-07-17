// const Spotify: React.FC = () => {
//   return (
//     <main className="bg- w-[100%] flex justify-center items-center  ">
//       {/* {Spotify Cover} */}
//       <div className="h-[500px] w-[80%] bg-black">
//         {/* {Inner Spotify} */}
//         <div className="h-[500px] w-[1000px] bg-[#121212] ml-[10px] rounded-md justify-center flex flex-col">
//           {/* {Popular Albums and Singles} */}
//           <div className=" ml-[30px] flex justify-between items-center">
//             <div className="h-[200px] w-[180px] bg-amber-500 rounded-2xl ml-[20px]  mt-[20px]  "></div>
//             <div className="h-[200px] w-[180px] bg-amber-500 rounded-2xl ml-[20px]  mt-[20px]"></div>
//             <div className="h-[200px] w-[180px] bg-amber-500 rounded-2xl ml-[20px]  mt-[20px]"></div>
//             <div className="h-[200px] w-[180px] bg-amber-500 rounded-2xl ml-[20px]  mt-[20px]"></div>
//             <div className="h-[200px] w-[180px] bg-amber-500 rounded-2xl ml-[20px]  mt-[20px]"></div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Spotify;

// 


import Radio from "../assets/IMAGE 1.jpeg";
import friday from "./assets/friday.jpg";
import afro from "./assets/afro.jpg";
import african from "./assets/african.jpg";
import update from "./assets/update.jpg";

const Icymi = () => {
  return (
    <>
      <p className="bg-[#121212] flex items-center text-3xl font-bold text-white p-5 ">
        ICYMI
      </p>
      <div className="flex justify-around w-100% h-90 items-center font-light  bg-[#121212]">
        <Radio picture={friday} text="New Music from Burna Boy" />
        <Radio picture={afro} text="The latest straight bars" />
        <Radio picture={african} text="The tracks heating up" />
        <Radio picture={update} text="the latest and greatest" />
      </div>
    </>
  );
};
export default Icymi;