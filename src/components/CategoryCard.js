import { CDN_URL } from "./utils/constants";
const CategoryCard = ({ imageUrl, description, text }) => {
 

  return (
    <div className="category-card" style={{ backgroundColor: "#f0f0f0" }}>
      
      <img src={imageUrl} alt={text} className="category-image" />
      <h3>{text}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CategoryCard;
