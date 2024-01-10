import Uv from "./Uv";
import Astro from "./Astro";
import PropTypes from "prop-types"
Info.propTypes = {
  newData: PropTypes.object,
};
export default function Info({ newData }) {
  return (
    <div className="w-[263px] md:w-[412px] mt-1 md:mt-1 px-1 rounded-sm flex justify-between items-center ">
      <Uv newData={newData} />
      <Astro newData={newData} />
    </div>
  );
}
