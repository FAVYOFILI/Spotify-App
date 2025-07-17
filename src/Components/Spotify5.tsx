import Radio from "./Radio";
import Kizz from "../assets/Kizz.jpeg";
import Maff from "../assets/Maff.jpeg";
import Jonn from "../assets/Jonn.jpeg";
import Shalliopi from "../assets/Shallipoppi.jpeg";

const Addradio = () => {
  return (
    <>
      <p className="bg-[#121212] flex items-center text-3xl font-bold text-white p-5">
        Popular Radio
      </p>
      <div className="flex justify-around w-100% h-90 items-center bg-[#121212]  ">
        <Radio picture={Kizz} text="With Kizz Daniel" />
        <Radio picture={Maff} text="With fola" />
        <Radio picture={Jonn} text="With Runtown" />
        <Radio picture={Shalliopi} text="With fido" />
      </div>
    </>
  );
};
export default Addradio;
