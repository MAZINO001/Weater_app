import "./Index.css";
import More from "./More";
import PropTypes from "prop-types"
Display.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};
export default function Display({ data, loading }) {
  return (
    <div>
      {!loading ? (
        <div className="flex items-center justify-evenly flex-col mt-2 md:mt-12 mb-1 md:mb-5 ">
          <div className="flex items-center justify-evenly flex-col">
            <h1 className="text-center text-3xl md:text-5xl">
              {data.current.temp_c}°
            </h1>
            <h3 className="text-center text-sm md:text-lg mb-2">
              {data.current.condition.text}
            </h3>
            <span className="text-center text-xs md:text-sm mb-3">
              In {data.location.name}, {data.location.country}, the sky is
              mostly cloudy with {data.current.cloud}% cloud cover. The wind is
              blowing from the {data.current.wind_dir}.
            </span>
          </div>
          <div className="md:mt-6 md:p-1 p-2">
            <More data={data} loading={loading} />
          </div>
        </div>
      ) : (
        <div>Loading . . .</div>
      )}
    </div>
  );
}
