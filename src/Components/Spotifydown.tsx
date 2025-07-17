import { BiShuffle } from "react-icons/bi";
import { MdSkipPrevious } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { BsRepeat } from "react-icons/bs";
import { BsFilePlay } from "react-icons/bs";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdOutlineConnectedTv } from "react-icons/md";
import { GoUnmute } from "react-icons/go";
import { CgMiniPlayer } from "react-icons/cg";
import { RiFullscreenFill } from "react-icons/ri";

const Spotifydown: React.FC = () => {
  return (
    <main className="h-[60px] ">
      <div className="h-[60px] w-[100%] bg-black mb-[50px] flex justify-between ">
        <div className="h-[60px] w-[310px]"></div>
        <div className="h-[60px] w-[500px] justify-center flex ">
          <div className="flex justify-between w-[250px] items-center ml-[60px]">
            <BiShuffle className="text-white size-[20px] hover:cursor-pointer" />
            <MdSkipPrevious className="text-white size-[20px] hover:cursor-pointer" />
            <FaPlayCircle className="text-white size-[40px] hover:cursor-pointer" />
            <MdSkipNext className="text-white size-[20px] hover:cursor-pointer" />
            <BsRepeat className="text-white size-[20px] hover:cursor-pointer" />
          </div>
        </div>
        <div className="h-[60px] w-[330px] flex justify-between items-center">
          <BsFilePlay className="text-white size-[20px] hover:cursor-pointer " />
          <HiOutlineQueueList className="text-white size-[20px] hover:cursor-pointer" />
          <MdOutlineConnectedTv className="text-white size-[20px] hover:cursor-pointer" />
          <GoUnmute className="text-white size-[20px] hover:cursor-pointer" />
          <CgMiniPlayer className="text-white size-[20px] hover:cursor-pointer" />
          <RiFullscreenFill className="text-white size-[20px] hover:cursor-pointer" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Spotifydown;
