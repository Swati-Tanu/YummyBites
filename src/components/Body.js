import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [isTopRatedFilterActive, setIsTopRatedFilterActive] = useState(false);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const topRestaurants = listOfRestaurants.filter((el) => {
    return el?.info?.avgRating > 4.5;
  });

  const searchRestaurants = listOfRestaurants.filter((el) => {
    return el?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_URL);
      const json = await data.json();

      const restaurants = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestaurants(restaurants || []);
      setFilteredRestaurant(restaurants || []);
    } catch (err) {
      console.error("Failed to fetch restaurants:", err);
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div className="flex justify-center items-center">
        <h1 className="py-5 text-center text-red-500">
          Looks like you're offline, please check your internet connection!
        </h1>
      </div>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              if (isTopRatedFilterActive) {
                setFilteredRestaurant(listOfRestaurants);
                setIsTopRatedFilterActive(false);
              } else {
                setFilteredRestaurant(topRestaurants);
                setIsTopRatedFilterActive(true);
              }
            }}
          >
            {isTopRatedFilterActive ? "Clear Filter" : "Top Rated Restaurants"}
          </button>
        </div>
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg px-5 mx-3 py-2 min-w-96"
            placeholder="Search Restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-10 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              setFilteredRestaurant(searchRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center"></div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((el) => {
          return (
            <Link to={"/restaurants/" + el?.info?.id} key={el?.info?.id}>
              {el?.info?.isOpen ? (
                <RestaurantCardPromoted resData={el} />
              ) : (
                <RestaurantCard resData={el} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
