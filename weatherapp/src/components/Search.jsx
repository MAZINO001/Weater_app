import React, { useState } from "react";
import PropTypes from "prop-types"
Search.propTypes = {
  onSearch: PropTypes.func,
};
export default function Search({ onSearch }) {
  const [city, setCity] = useState("");


  const handleInputChange = (event) => {
    setCity(event.target.value);
  };




  const handleSearch = async () => {
    if (city !== null && city !== undefined) {
      const forecast = await onSearch(city);
      if (!forecast) {
        return;
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      setCity("");
    }
  };

  return (
    <div className="absolute ml-6 mt-3 ">
      <input
        className="w-[250px] md:w-[400px] border-none outline-none px-2 py-1 h-[20px]  md:h-[30px] rounded-md text-white text-xs md:text-base   bg-white bg-opacity-10 placeholder:text-[#999]  placeholder:text-md placeholder:capitalize placeholder:font-medium md:mt-7"
        type="text"
        placeholder="Enter a city . . ."
        value={city}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="hidden" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
