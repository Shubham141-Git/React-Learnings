import { useEffect, useState } from "react";
import { CDN_URL, RES_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useReatrauntMenu from "../utils/useReatrauntMenu";

const RestaurantMenu = () => {
  // const [res1, setRes] = useState([]);
  // const [data, setData] = useState([]);

  const { resId } = useParams();
  console.log(resId);

  const data1 = useReatrauntMenu(resId);
  const { data, res1 } = data1;

  // useEffect(() => {
  //   console.log("inside useEffect");
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     RES_API + resId + `&catalog_qa=undefined&submitAction=ENTER`
  //   );
  //   const res = await data.json();

  //   setRes(res.data.cards[0]?.card?.card?.info);

  //   setData(
  //     res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  //       .itemCards
  //   );
  // };
  // console.log(res1);
  // console.log(data);
  // const { name, cuisines, avgRating, costForTwo } = res1;
  //console.log(res1.cards[0].card.card.info);

  //console.log(res1.cards[0].card.card.info);

  // console.log(
  //   res1.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
  //
  // );

  const { name, cuisines, avgRating, costForTwo } = res1;

  return (
    <div className="res-menu">
      <div>
        <h1>{name}</h1>
        <p>
          {cuisines} - {costForTwo / 100}
        </p>
        <h2>Menu</h2>
      </div>
      <div className="menu">
        {data?.length === 0 ? (
          <Shimmer />
        ) : (
          data?.map((e) => {
            const { id, price, name, imageId, description } = e.card.info;
            return (
              <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
                <img
                  className="res-logo"
                  alt="biryani"
                  src={CDN_URL + imageId}
                />
                <h3>{name}</h3>

                <h4> Rs - {price / 100}</h4>
                <h4>{description}</h4>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
