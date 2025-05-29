import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, sla} = resData?.info;

  return (
      // inline style(css)
      // <div className="res-card" style={{ backgroundColor: "LightGray"}}>
    <div className="res-card">
      <img src={CDN_URL + resData.info.cloudinaryImageId}
      alt="logo" className="res-logo" />
      <h3 className="name">{name}</h3>
      <h4>{cuisines.join(",  ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

export default RestaurantCard;