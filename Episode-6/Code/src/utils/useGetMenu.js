import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useGetMenu = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataCall = await fetch(MENU_API);
    const json = await dataCall.json();
    let final =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(final);
    setListOfRestaurant(final);
  };

  return listOfRestaurant;
};

export default useGetMenu;
