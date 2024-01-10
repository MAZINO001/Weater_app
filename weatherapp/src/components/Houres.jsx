import { AiOutlineClockCircle } from "react-icons/ai";
import styles from "../styles/Houres.module.css";
import Houre from "./Houre";
import PropTypes from "prop-types"
Houres.propTypes = {
  newData: PropTypes.object,
};
export default function Houres({ newData }) {
  const houre = newData.forecast.forecastday[0].hour;

  return (
    <div className=" w-[255px] md:w-[405px] md:h-[156px]  mb-2 md:mb-4  bg-[rgba(0,_0,_0,_0.7)] rounded-md">
      <div className=" py-1">
        <p className="flex items-center justify-start text-[#999]  text-xs md:text-md  font-normal px-1 py-1">
          <span className="mx-1 ">
            <AiOutlineClockCircle />
          </span>
          Houres
        </p>
        <hr className="text-[#999]" />
      </div>

      <div className={styles.Houres}>
        {houre.map((houre) => (
          <Houre key={houre.time} houres={houre} />
        ))}
      </div>
    </div>
  );
}
