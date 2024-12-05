import React, { useState, useEffect } from "react";

function CardDetail({ name, image, alt }) {
  return (
    <div className=" flex flex-col items-center justify-center border border-gray-300 p-4 m-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <img
        className="w-full h-32 object-cover rounded-md"
        src={image}
        alt={alt}
      />
      <h2 className="mt-2 text-center text-lg font-semibold text-gray-700">
        {name}
      </h2>
    </div>
  );
}

export default function Countries({ Countryname }) {
  const [filter, setFilter] = useState([]);
  const [detail, setDetail] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (Countryname !== "") {
        const filteredData = data.filter((e) =>
          e.name.common.toLowerCase().includes(Countryname)
        );
        setDetail(filteredData);
      } else {
        setDetail(data);
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [Countryname]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
      {detail.map((data) => (
        <CardDetail
          key={data.name.common}
          name={data.name.common}
          image={data.flags.png}
          alt={data.flags.alt}
        />
      ))}
    </div>
  );
  
}
