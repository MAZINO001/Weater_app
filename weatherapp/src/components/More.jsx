import FeelsLike from "./FeelsLike";
import Precpitation from "./Precpitation";
import Visibility from "./Visibility";
import Humidity from "./Humidity";
import PropTypes from "prop-types"
More.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};
export default function More({ data, loading }) {
  return (
    <div className="flex justify-center items-center">
      {!loading ? (
        <div className="grid grid-cols-2 gap-3 md:gap-5 mt-3 md:mt-4 ">
          <FeelsLike data={data} />
          <Precpitation data={data} />
          <Visibility data={data} />
          <Humidity data={data} />
        </div>
      ) : (
        <div>Loading . . .</div>
      )}
    </div>
  );
}
