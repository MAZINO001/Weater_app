import React, { useState, useEffect } from "react";
import Houres from "./Houres";
import Days from "./Days";
import Info from "./Info";
import PropTypes from "prop-types";
Right.propTypes = {
  query: PropTypes.string,
};
export default function Right({ query }) {
  const [newData, setNewData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=3`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7cc6ca895amshad869bf0ac8843bp156362jsnab9622592069",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setNewData(result);
      } catch (error) {
        console.error(error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query]);

  return (
    <div className="rounded-md w-[250px] md:w-[400px] h-fit ml-2 mr-1 flex items-center justify-start flex-col">
      {loading ? (
        <div>Loading ...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <Houres newData={newData} loading={loading} />
          <Days newData={newData} query={query} />
          <Info newData={newData} />
        </>
      )}
    </div>
  );
}
