import { MdOutlineWindPower } from "react-icons/md";
import PropTypes from "prop-types"
Astro.propTypes = {
  newData: PropTypes.object,
};
export default function Astro({ newData }) {
  return (
    <div className=" w-[110px] h-[91px]  md:w-[170px] md:h-[121px]  bg-black bg-opacity-70 rounded-md p-1 leading-2">
      <h1 className="text-[#999]  font-normal md:font-bold text-sm md:text-md capitalize flex items-center justify-satrt  ml-1">
        <span className="mr-1">
          <MdOutlineWindPower />
        </span>
        wind
      </h1>

      <div className="flex items-center justify-start mb-[1.5px] md:my-1">
        <h1 className="text-md md:text-xl font-meduim mr-1 md:mr-3 ml-1">
          {newData.current.wind_kph}
        </h1>
        <div className="flex items-center justify-center flex-col ml-1 text-[10px] md:text-sm capitalize">
          <span>km/h</span>
          <span>wind</span>
        </div>
      </div>

      <hr />

      <div className="flex items-center justify-start mt-[1.5px] md:my-1">
        <h1 className="text-md md:text-xl  font-meduim mr-1 md:mr-3 ml-1">
          {newData.current.gust_kph}
        </h1>
        <div className="flex items-center justify-center flex-col ml-1 text-[10px] md:text-sm capitalize">
          <span>km/h</span>
          <span>gust</span>
        </div>
      </div>
    </div>
  );
}
