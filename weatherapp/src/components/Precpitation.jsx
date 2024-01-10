import { BsDropletHalf } from "react-icons/bs";
import PropTypes from "prop-types"
Precpitation.propTypes = {
  data: PropTypes.object,
};
export default function Precpitation({ data }) {
  const prec = data.current.precip_mm;
  const precipitation = prec;
  const getPrecipitationComment = (precipitation) => {
    if (precipitation === 0) {
      return " it's dry.";
    } else if (precipitation > 0 && precipitation <= 0.2) {
      return "Light rain or drizzle.";
    } else if (precipitation > 0.2 && precipitation <= 1) {
      return "Moderate rain.";
    } else {
      return "Heavy rain.";
    }
  };

  const precipitationComment = getPrecipitationComment(precipitation);
  return (
    <div>
      <div className="container">
        <span className="span">
          <span className="icon">
          <BsDropletHalf />

          </span>
          {""} precpitation
        </span>
        <h3 className="h3">{data.current.precip_mm}''</h3>
        <p className="par">{precipitationComment}</p>
      </div>
    </div>
  );
}
