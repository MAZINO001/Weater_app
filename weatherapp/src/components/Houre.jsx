import PropTypes from "prop-types";
Houre.propTypes = {
  houres: PropTypes.object,
};
export default function Houre({ houres }) {
  const now = new Date();
  const currentHour = now.getHours();
  const fullDate = houres.time;
  const dateObject = new Date(fullDate);
  const hour = dateObject.getHours();
  const time = dateObject.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const backgroundColor = hour === currentHour ? "rgba(255,255,255,0.3)" : "";

  return (
    <div
      className=" w-[42px] h-[62px] md:w-[52px] md:h-[100px] bg-opacity-40 bg-black m-1 md:m-2 px-[2px] md:px-[5.8px] py-1 md:py-2 rounded-sm md:rounded-md  "
      style={{ backgroundColor }}
    >
      <h3 className="text-xs md:text-[16px] font-light text-[#999] md:mb-3">
        {time}
      </h3>
      <h2 className="text-xs md:text-[15px] md:mb-2 text-center">
        {houres.temp_c}°
      </h2>
      <img
        src={houres.condition.icon}
        style={{ width: "35px", jeight: "35px" }}
        alt=""
        className=" w-5 md:w-8 md:mx-0 mx-auto flex justify-center"
      />
    </div>
  );
}
