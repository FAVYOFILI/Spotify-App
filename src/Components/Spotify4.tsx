type Popprops = {
  pic: string;
  names: string;
  art: string;
};
const Spotify4 = ({ pic, names, art }: Popprops) => {
  return (
    <>
      <div className="">
        <div className="w-60 h-70 font-bold  text-white ">
          <img className="w-50 h-50 rounded-full" src={pic} />
          <p>{names}</p>
          <h2>{art}</h2>
        </div>
      </div>
    </>
  );
};
export default Spotify4;

