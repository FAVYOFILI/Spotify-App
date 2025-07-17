import Radio from "./Radio";
import top from "./assets/top.jpg";
import top2 from "./assets/top2.jpg";
import top3 from "./assets/top3.jpg";
import top4 from "./assets/top4.jpg";

const Charts = () => {
  return (
    <>
      <p className="bg-[#121212] flex items-center text-3xl font-bold text-white p-5 ">
        Featured Charts
      </p>
      <div className="flex justify-around w-100% h-90 items-center font-light  bg-[#121212]">
        <Radio picture={top} text="With weekly updates..." />
        <Radio picture={top2} text="With weekly updates..." />
        <Radio picture={top3} text="With weekly updates..." />
        <Radio picture={top4} text="With weekly updates..." />
      </div>
    </>
  );
};


export default Charts