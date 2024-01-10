import { TbUvIndex } from "react-icons/tb";
import PropTypes from "prop-types"
Uv.propTypes = {
  newData: PropTypes.object,
};
export default function Uv({ newData }) {
  const uv = newData.forecast.forecastday[0].day.uv;
  const uvIndex = uv;

  const getUvRiskLevel = (uvIndex) => {
    if (uvIndex >= 1 && uvIndex <= 2) {
      return "Low Risk";
    } else if (uvIndex >= 3 && uvIndex <= 5) {
      return "Moderate Risk";
    } else if (uvIndex >= 6 && uvIndex <= 7) {
      return "High Risk";
    } else if (uvIndex >= 8 && uvIndex <= 10) {
      return "Very High Risk";
    } else {
      return "Extreme Risk";
    }
  };

  const uvRiskLevel = getUvRiskLevel(uvIndex);

  const barStyle = {
    width: `${uvIndex * 10}%`,
    backgroundColor:
      uvIndex >= 1 && uvIndex <= 2
        ? "green"
        : uvIndex >= 3 && uvIndex <= 5
        ? "yellow"
        : uvIndex >= 6 && uvIndex <= 7
        ? "orange"
        : uvIndex >= 8 && uvIndex <= 10
        ? "red"
        : "purple",
  };

  return (
    <div className="w-[110px] h-[92px]  md:w-[170px] md:h-[122px] bg-black bg-opacity-70 p-1 rounded-md ">
      <h1 className="text-[#999]  font-normal md:font-bold text-sm md:text-md capitalize flex items-center justify-satrt  ml-1 ">
        <span className="mr-1">
          <TbUvIndex />
        </span>
        Uv-index
      </h1>
      <h1 className="text-lg md:text-3xl ml-1 my-1 flex items-center md:items-end justify-start  ">
        {uvIndex}
        <span className=" ml-2 md:ml-3 text-xs md:text-sm capitalize">
          mW/m2
        </span>
      </h1>
      <div className="rounded-md  bg-white w-[100px] md:w-[160px] ">
        <span
          className="block max-w-[100px] md:max-w-[160px] h-[1px] md:h-[3px] rounded-md mt-1 mb-1 md:mt-3 md:mb-2"
          style={barStyle}
        ></span>
      </div>
      <p className="md:text-sm  md:ml-1  text-xs md:text-md mt-2 md:mt-3 ">
        {uvRiskLevel}
      </p>
    </div>
  );
}
