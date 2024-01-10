import React from "react";
import Display from "./Display";
import PropTypes from "prop-types"
Left.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};
export default function Left({ data, loading }) {
  return (
    <div className=" bg-[rgba(255,_255,_255,_0.1)] md:w-[400px] w-[250px] rounded-md h-fit mr-2 ml-1 mt-5 md:mt-14 mb-2  ">
      <Display data={data} loading={loading} />
    </div>
  );
}
