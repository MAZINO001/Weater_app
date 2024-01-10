import { WiHumidity } from "react-icons/wi";
import PropTypes from "prop-types";
Humidity.propTypes = {
  query: PropTypes.object,
};
export default function Humidity({ data }) {
  const hum = data.current.humidity;
  const humidity = hum;

  const getHumidityComment = (humidity) => {
    if (humidity <= 30) {
      return "Low humidity.";
    } else if (humidity > 30 && humidity <= 60) {
      return "Moderate humidity";
    } else {
      return "High humidity";
    }
  };
  const humidityComment = getHumidityComment(humidity);

  return (
    <div>
      <div  className="container">
        <span  className="span">
          <span className="icon">
          <WiHumidity />
          </span>
          {""}humidity
        </span>
        <h3  className="h3">{data.current.humidity}%</h3>
        <p  className="par">{humidityComment}</p>
      </div>
    </div>
  );
}
