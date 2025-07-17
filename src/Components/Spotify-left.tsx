import IMAGE1 from "../assets/IMAGE 1.jpeg"
// import IMAGE2 from "../assets/IMAGE 2.jpeg";
// import IMAGE3 from "../assets/IMAGE 3.jpeg";
// import IMAGE4 from "../assets/IMAGE 4.jpeg";
// import IMAGE5 from "../assets/IMAGE 5.jpeg";
// import IMAGE6 from "../assets/IMAGE 6.jpeg";
// import IMAGE7 from "../assets/IMAGE 7.jpeg";
// import IMAGE8 from "../assets/IMAGE 8.jpeg";
// import IMAGE9 from "../assets/IMAGE 9.jpeg";





const Spotifyleft: React.FC = () => {
  return (
    <main className="bg- w-[100%] flex h-auto overflow-auto ">
      {/* {Left Spotify} */}
      <div className="h-px] w-[320px] bg-black ">
        <div className="h-px] w-[300px] bg-[#121212] ml-[10px] rounded-md"></div>
      </div>

      {/* {Spotify Cover} */}
      <div className="w-[80%] bg-black h-auto overflow-auto ">
        {/* {Inner Spotify} */}
        <div className="h-px] w-[1000px] bg-[#121212] ml-[10px] rounded-md justify-center flex flex-col  ">
          {/* {All Music Podcasts} */}
          <div className="h-[60px] w-[900px] mt-[20px] gap-5  flex">
            {/* {Buttons} */}
            <button className="h-[34px] w-[43px] bg-white rounded-3xl text-black hover:cursor-pointer">
              All
            </button>
            <button className="h-[34px] w-[70px] bg-black rounded-3xl items-center text-white hover:cursor-pointer">
              Music
            </button>
            <button className="h-[34px] w-[90px] bg-black rounded-3xl text-white hover:cursor-pointer">
              Podcasts
            </button>
          </div>
          {/* {Made for you} */}
          <div className="h-[350px] w-[250px] bg-white rounded-2xl items-center justify-center ml-[30px]">
            Made For <br />
            <h1 className="">Favour Ofili</h1>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
          </div>

          {/* {Popular Albums and Singles} */}
          <div className=" ml-[30px] flex justify-between items-center">
            <h1></h1>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]  ">
              <img src={IMAGE1} className="" />
            </div>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]">
              {/* <img src={IMAGE2} className="" /> */}
            </div>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
          </div>

          <div className=" ml-[30px] flex justify-between items-center">
            {" "}
            <h1></h1>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]  "></div>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
          </div>

          <div className=" ml-[30px] flex justify-between items-center">
            <div className="h-[200px] w-[200px] bg-white  ml-[20px]  mt-[20px] rounded-[50%] "></div>
            <div className="h-[200px] w-[200px] bg-white ml-[20px]  mt-[20px] rounded-[50%]"></div>
            <div className="h-[200px] w-[200px] bg-white  ml-[20px]  mt-[20px] rounded-[50%]"></div>
            <div className="h-[200px] w-[200px] bg-white ml-[20px]  mt-[20px] rounded-[50%]"></div>
            <div className="h-[200px] w-[200px] bg-white ml-[20px]  mt-[20px] rounded-[50%]"></div>
          </div>

          <div className=" ml-[30px] flex justify-between items-center">
            {" "}
            <h1></h1>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]  "></div>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
            <div className="h-[200px] w-[180px] bg-white rounded-2xl ml-[20px]  mt-[20px]"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Spotifyleft;
