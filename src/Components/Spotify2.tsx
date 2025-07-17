type musicprops = {
  picture: string;
  text: string;
  icon?: string;
  name: string;
};
const Music = ({ picture, text, icon, name }: musicprops) => {
  return (
    <>
      <div className=" ">
        <div className="w-60 h-70 font-bold text-white bg[#121212]">
          <img className="w-50 h-50 rounded-xl  " src={picture} />
          <p>{text}</p>
          <div className="flex items-center font-medium">
            <img className="w-10 h-10 " src={icon} />
            <h2>{name}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default Music;
