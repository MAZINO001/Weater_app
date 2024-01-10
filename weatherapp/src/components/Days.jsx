import { AiOutlineCalendar } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";
import Day from "./Day";
import PropTypes from "prop-types";
Days.propTypes = {
  newData: PropTypes.object,
  query: PropTypes.string,
};
export default function Days({ newData, query }) {
  const days = newData.forecast.forecastday;
  return (
    <div className="w-[255px] md:w-[405px]  mb-2 md:mb-4  m-1 bg-[rgba(0,_0,_0,_0.7)] rounded-md">
      <div className=" py-1">
        <p className="flex items-center justify-start text-[#999] text-sm md:text-md font-normal px-1 py-1">
          <span className="mx-1">
            <AiOutlineCalendar />
          </span>
          Days
        </p>
        <hr />
      </div>
      <div className="flex justify-around items-center h-[100px] md:h-[140px]    ">
        {days.map((day, index) => (
          <Day key={index} newData={day} />
        ))}
        <div className=" p-1 rounded-sm md:rounded-md bg-[rgba(0,_0,_0,_0.7)]  my-1 w-[50px] h-[90px] md:w-[70px] md:h-[120px] flex items-center ">
          <h1 className="cursor-pointer text-[#999]  active:scale-[0.97] text-[30px] md:text-[50px] w-13 h-13 relative  left-1.5 font-medium">
            {/* <a
              className="   "
              target="_blank"
              href={`https://www.google.com/search?q=weather+${query}`}
            >
              <AiFillPlusSquare />
            </a> */}
            <a
              className="your-link-styles"
              target="_blank"
              href={`https://www.google.com/search?q=weather+${query}`}
              aria-label="Search weather on Google"
            >
              <AiFillPlusSquare aria-hidden="true" />
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
