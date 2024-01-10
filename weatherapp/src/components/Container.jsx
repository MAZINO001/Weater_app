import "./Index.css";
import React, { useEffect, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import PropTypes from "prop-types";
Container.propTypes = {
  query: PropTypes.string,
};
export default function Container({ query }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`; // Use the query in the URL
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
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          throw new Error("Network response was not ok.");
        }
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, [query]);

  if (error) {
    return <p className="bg-black uppercase text-3xl p-5 rounded-lg ">netwert erro was encounterd . . .</p>
    
  }

  if (loading) {
    return <p>loading ...</p>;
  }
  return (
    <div className="bg-[rgba(0,_0,_0,_0.5)] flex items-center justify-between  flex-col md:flex-row  mx-auto my-1 p-5 rounded-lg ">
      <Left data={data} loading={loading} />
      <Right query={query} data={data} loading={loading} error={error} />
    </div>
  );
}
