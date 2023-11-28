import { useEffect, useState } from "react";

import { RES_API } from "./constant";
const useReatrauntMenu = (resId) => {
  const [res1, setRes] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      RES_API + resId + `&catalog_qa=undefined&submitAction=ENTER`
    );
    const res = await data.json();

    setRes(res.data.cards[0]?.card?.card?.info);

    setData(
      res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };

  return { data, res1 };
};

export default useReatrauntMenu;
