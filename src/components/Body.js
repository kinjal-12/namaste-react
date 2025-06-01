import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  // Local state variable(scope to this component only)
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  // const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);


  //  If no dependency array, useEffect on every render
  // If dependency array is empty = [], useEffect is called on only initial render and just once
  // If depedency array is [btnReact], useEffect is called on everytime btnReact changes

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const response = await data.json();
    // Optional chaining
    setlistOfRestaurants(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

 if (listOfRestaurants.length === 0)  return  <Shimmer />

  // Conditional rendering - rendering base on conditions
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>;
  // }

  return  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}></input>
          <button className="search-btn" onClick={() => {
            // Filter the restaurant cards and update UI
            const searchResult = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

            setFilteredRestaurants(searchResult);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"restaurants/"+ restaurant.info.id} key={restaurant.info.id} >
          <RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
