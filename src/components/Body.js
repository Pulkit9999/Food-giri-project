import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { GET_RES_API_URL } from "./utils/mockData";

const Body = () => {
  const [restaurantCategories, setRestaurantCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const fetchData = async () => {
    try {
      const data = await fetch(GET_RES_API_URL);
      const json = await data.json();
      setRestaurantCategories(json?.results?.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleButtonClick = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleButtonClick}>
          {showCategories ? "Hide Top Rated Restaurants" : "Search Categorywise Restaurants"}
        </button>
        <br/><br/>
        {showCategories && restaurantCategories.length > 0 && (
          <div className="category-list">
            {restaurantCategories.map((category) => (
              <CategoryCard
                key={category.text}
                imageUrl={category.image_url}
                description={category.description}
                text={category.text}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
