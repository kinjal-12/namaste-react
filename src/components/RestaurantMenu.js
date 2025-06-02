// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

//   Moved this responsibility of fetching data in to custom hook - useRestaurantMenu
//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(MENU_API + resId);

//     const json = await data.json();
//     setResInfo(json.data);
//   };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <p>Ratings: {avgRating}</p>

      <ul className="menu-items">
        {itemCards?.map((item) => {
          const { id, imageId, name, price, finalPrice, defaultPrice } = item.card.info;

          return (
            <li key={id} className="menu-item">
              <div className="item-info">
                <img src={CDN_URL + imageId } alt={name} className="item-image" />
                <p>{name} - ₹{(price || finalPrice || defaultPrice) / 100}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
