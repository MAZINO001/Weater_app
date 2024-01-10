import PropTypes from "prop-types";
Day.propTypes = {
  newDta: PropTypes.object,
};
export default function Day({ newData }) {
  const now = new Date();
  const currentDay = now.getDate();

  const { date, day } = newData;
  const monthAndDay = date.substring(5);
  const dateObject = new Date(date);
  const dayName =
    currentDay === dateObject.getDate()
      ? "Today"
      : dateObject.toLocaleString("en-US", { weekday: "short" });

  const backgroundColor =
    currentDay === dateObject.getDate()
      ? "rgba(255,255,255,0.3)"
      : "transparent";

  return (
    <div
      className="w-[50px] h-[90px] md:w-[70px] md:h-[120px]  px-1 rounded-sm md:rounded-md  my-1 md:my-2 cursor-pointer text-center flex justify-evnely  items-center flex-col "
      style={{ backgroundColor }}
    >
      <h3 className="mt-1 md:mt-2  capitalize text-md md:text-xl ">
        {dayName}
      </h3>
      <p className=" text-xs md:text-sm text-[#999]">{monthAndDay}</p>
      <h2 className=" text-sm font-light  md:text-lg md:font-medium">
        {day.avgtemp_c}°
      </h2>
      <img
        className="w-[24px] md:w-[35px]"
        src={day.condition.icon}
        alt=""
      />
    </div>
  );
}
