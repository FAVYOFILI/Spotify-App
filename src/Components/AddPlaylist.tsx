import Music from "./Music";
import burna from "./assets/burna.jpg";
import eeeee from "./assets/eeeee.png";
import champ from "./assets/champ.jpg";
import jump from "./assets/jump.jpg";

const Add = () => {
  return (
    <>
      <p className="bg-[#121212] flex items-center text-3xl font-bold text-white p-5">
        Trending Songs
      </p>
      <div className="flex justify-around w-100% h-90 items-center bg-[#121212] ">
        <Music picture={burna} text="Love" icon={eeeee} name="Burna Boy" />
        <Music
          picture={champ}
          text="CHAMPAIN & VACAY"
          icon={eeeee}
          name="Travist Scott,Don Toliver"
        />
        <Music picture={jump} text="Love" icon={eeeee} name="Burna Boy" />
        <Music picture={burna} text="Love" icon={eeeee} name="Burna Boy" />
      </div>
    </>
  );
};
export default Add;
