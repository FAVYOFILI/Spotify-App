type radioprops = {
  picture: string;
  text: string;
};
const Current = ({ picture, text }: radioprops) => {
  return (
    <>
      <div className="">
        <div className="w-60 h-70 font-bold text-white bg[#121212]  max-sm:[425px] rounded-b-full">
          <img className="w-50 h-50 rounded-xl " src={picture} />
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
export default Current;
// max-sm:[425px]
