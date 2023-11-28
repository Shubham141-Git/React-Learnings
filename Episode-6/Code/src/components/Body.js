import data from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import React from "react";
import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useGetMenu from "../utils/useGetMenu";

const Body = () => {
  console.log("body rendered");
  //useState is used to create Local State varaible because it maintains state of a componenet
  /*
  let arr = useState(data);

  const [listOfRestaurant, setListOfRestaurant] =arr

  const listOfRestaurant =arr[0]
  const setListOfRestaurant=arr[1]

  Above is just a array destrutring

Whenever the state variables changes , react triggers a reconciliation cycle (re-render the componenet)
  */

  // const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [input, setInput] = useState("");

  // useEffect(() => {
  //   console.log("UseEffect called");
  // }, [input]);
  //UseEffect will be called after the components has rendered

  //if no dependency array useEffect is calleed on everytime when  componenet render
  //if empty dependency array then useEffect is called on only initial render just once when componenet is rendered for the first time
  //if dependency array is not empty then useEffect wil be called only when the dependency changes

  /**
   * this code is converted to custom hook called useGetmenu
   
  const fetchData = async () => {
    const dataCall = await fetch(MENU_API);
    const json = await dataCall.json();
    let final =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(final);
    setListOfRestaurant(final);
  };

  useEffect(() => {
    fetchData();
  }, []);

   */

  let listOfRestaurant = useGetMenu();

  let status = useOnlineStatus();

  if (status === false) {
    return <h1>Please connect to internet</h1>;
  }

  return (
    // Everythng inside return is JSX not HTML
    listOfRestaurant?.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
          <input
            type="text"
            className="search"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the data
              console.log(input);
              console.log(listOfRestaurant);
              let filter = [];
              listOfRestaurant.map((e) => {
                if (e.info.name.toLowerCase().includes(input.toLowerCase())) {
                  filter.push(e);
                }
                setFilteredRes(filter);
              });
            }}
          >
            Search
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              let filter = [];
              listOfRestaurant.map((e) => {
                if (e.info.avgRating > 4.3) {
                  filter.push(e);
                }
                setFilteredRes(filter);
              });
            }}
          >
            Top Rated Reastaurant
          </button>

          <button
            className="filter-btn"
            onClick={() => {
              setFilteredRes([]);
            }}
          >
            All Restaurant
          </button>
        </div>
        <div className="restaurant">
          {filteredRes?.length === 0
            ? listOfRestaurant?.map((e) => {
                console.log(e);
                return <RestaurantCard resData={e} />;
              })
            : filteredRes?.map((e) => {
                return <RestaurantCard resData={e} />;
              })}
        </div>
      </div>
    )
  );
};

export default Body;

//Note the state variable changes react will re-reder the componenent

//NOTE--> React is good at DOM OPeration which makes it fast -- React is Efficicent in DOm Manipulation beacause it uses virtual DOM

//Note --> everytime the state changes the entire component get re-render it can be any thing input box change or any state change

/**
1.Never create state variable inside the If else conditions bracket it creates inconsistancy inside the program
2. Never create  state variable inside for loop , inside functions
 */
