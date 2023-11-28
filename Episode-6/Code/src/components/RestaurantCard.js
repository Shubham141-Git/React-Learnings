import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  //some developer directly write {resName , cuisine} instead of props this is destructrucing
  //const {resName , cuisine} = props -->this is destructring

  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, id } = resData.info;
  return (
    <Link className="nav-link" to={`/restaurants/${id}`}>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }} key={id}>
        <img
          className="res-logo"
          alt="biryani"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>

        <h4>{avgRating} stars</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    </Link>
  );
};
export default RestaurantCard;
