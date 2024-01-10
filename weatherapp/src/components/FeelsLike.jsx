import { BsThermometerHalf } from "react-icons/bs";
import PropTypes from "prop-types"
FeelsLike.propTypes = {
  data: PropTypes.object,
};
export default function FeelsLike({ data }) {
  const fl = data.current.feelslike_c;
  const temperature = fl;

  const getTemperatureComment = (temperature) => {
    if (temperature < 10) {
      return "It's very cold.";
    } else if (temperature >= 10 && temperature < 20) {
      return "Cool weather.";
    } else if (temperature >= 20 && temperature < 30) {
      return "Warm and comfortable.";
    } else {
      return "Hot weather.";
    }
  };

  const temperatureComment = getTemperatureComment(temperature);
  return (
    <div>
      <div className="container">
        <span  className="span">
          <span className="icon"><BsThermometerHalf /></span>
          {" "}
          Feels Like
        </span>
        <h3  className="h3">{data.current.feelslike_c}°</h3>
        <p  className="par">{temperatureComment}</p>
      </div>
    </div>
  );
}
