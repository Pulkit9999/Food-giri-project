import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./utils/mockData";
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div class="res-container">
          {restaurantList.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.data.id}
                resData={restaurant}
              ></RestaurantCard>
            );
          })}
        </div>
      </div>
    );
  };

  export default Body;