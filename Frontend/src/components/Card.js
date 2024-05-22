import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
const Card = ({ id,img, title, star, reviews, newPrice, description }) => {
  
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        
        <div className="card-details">
          <h3 className="card-title">{title}
         </h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>

            <div className="wishlist">
            <FaHeart className="wishlist-icon" />
            </div>
          </section>
          <section className="card-price">
            <div className="price">
              {newPrice}
            </div>
            
            <div>
            <Link to={`/details/${id}`}>
            <button >View</button>
              </Link>
              </div>
              
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;