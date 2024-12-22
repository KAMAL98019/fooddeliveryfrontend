import React, { useState } from "react";
import data from "../../itemdetails/items.json";

const Home = () => {
  // Step 1: Create a state to store the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Step 2: Filter items based on the search query
  const filteredItems = data.items.filter((item) => {
    return item.menu.item.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Step 3: Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="max-w-[900px] p-10 mx-auto mt-5">
      {/* Search Input */}
      <div className="flex justify-center items-center w-full mb-5">
        <svg
          className="me-[-24px] z-[100]"
          width="23"
          height="23"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
            fill="#FC8019"
          ></path>
        </svg>
        <input
          type="text"
          value={searchQuery} // Bind input value to the searchQuery state
          onChange={handleSearchChange} // Update searchQuery on input change
          className="border-[1px] px-8 w-[70%] rounded-md focus:outline-none text-base font-normal text-[#8f8c8c] py-1"
          placeholder="Search"
        />
      </div>

      {/* Display filtered items */}
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {filteredItems.length === 0 ? (
          <div className="col-span-3 text-center text-gray-500">No items found</div>
        ) : (
          filteredItems.map((item, index) => (
            <div key={index} className="p-8 border-[2px] rounded-[5px] m-2">
              <img
                src={item.menu.url}
                alt={item.menu.item}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-3 text-center">
                <h3 className="text-xl font-semibold">{item.menu.item}</h3>
                <p className="text-[#FC8019] text-lg mt-1">${item.menu.price}</p>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm">{item.restaurant.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({item.restaurant.reviews})</span>
                  </div>
                  <div className="text-gray-500 text-sm">{item.restaurant.distance_km} km</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
