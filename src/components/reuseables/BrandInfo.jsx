import footerImage from "../../assets/icons/nanocodes_logo-d108ea57 2.svg";

const BrandInfo = ({ imageAlt = "Nanoevent Logo", imageSize = 10, extendStyles = "" }) => {
  return (
    <div className={`flex items-center gap-2 text-white ${extendStyles}`}>
      <img
        src={footerImage}
        alt={imageAlt}
        className={`w-[${imageSize}px] h-[${imageSize}px]`}
      />
      {/* <div>
        <h2 className="font-bold text-2xl">Nanocodes</h2>
        <p>Event planning</p>
      </div> */}
    </div>
  );
};

export default BrandInfo;
