import { BsEye } from "react-icons/bs";
import PropTypes from "prop-types"
Visibility.propTypes = {
  data: PropTypes.object,
};
export default function Visibility({ data }) {
  const vis = data.current.vis_km;
  const visibility = vis;

  const getVisibilityComment = (visibility) => {
    if (visibility >= 0.1 && visibility <= 1) {
      return "Very low visibility.";
    } else if (visibility > 1 && visibility <= 3) {
      return "Low visibility.";
    } else if (visibility > 3 && visibility <= 5) {
      return "Moderate visibility.";
    } else {
      return "Good visibility. ";
    }
  };

  const visibilityComment = getVisibilityComment(visibility);

  return (
    <div>
      <div className="container">
        <span className="span">
          <span className="icon">
            <BsEye />
          </span>
          visibility
        </span>
        <h3 className="h3">{data.current.vis_km}km</h3>
        <p className="par">{visibilityComment}</p>
      </div>
    </div>
  );
}
