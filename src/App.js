import React, { useState } from "react";
import Countries from "./Countries";
import './index.css'

function App() {
  const [name, setName] = useState("");

  const handleSearch = (e) => {
    setName(e.target.value.toLowerCase());
  };

  return (
    <div className=" mx-auto p-4">
      <div className="searchbar mb-4 text-center ">
        <input
          type="text"
          value={name}
          onChange={handleSearch}
          className="w-1/2 p-2 border border-gray-300 rounded-md border-black "
          placeholder="Search for countries..."
        />
      </div>
      <Countries Countryname={name} />
    </div>
  );
}

export default App;
