import { AiFillStar } from "react-icons/ai";

const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71W2geIY9vL._SY695_.jpg",
    title: "Nike Air Monarch IV",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹500",
    company: "Nike",
    color: "white",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/51kZRxvxg0L._SY695_.jpg",
    title: "Nike Air Vapormax Plus",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹200",
    company: "Nike",
    color: "red",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/61ZiBIQeiOL._SY695_.jpg",
    title: "Nike Waffle One Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹200",
    company: "Nike",
    color: "green",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Nike Running Shoe",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹200",
    company: "Nike",
    color: "black",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    title: "Flat Slip On Pumps",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹200",
    company: "Vans",
    color: "green",
    category: "flats",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "Knit Ballet Flat",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹50",
    company: "Adidas",
    color: "black",
    category: "flats",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Loafer Flats",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹50",
    company: "Vans",
    color: "white",
    category: "flats",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Nike Zoom Freak",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹200",
    company: "Nike",
    color: "green",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Nike Men's Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹200",
    company: "Adidas",
    color: "blue",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "PUMA BLACK-OCE",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹150",
    company: "Puma",
    color: "green",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Pacer Future Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹150",
    company: "Puma",
    color: "red",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹150",
    company: "Puma",
    color: "black",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Roma Basic Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹150",
    company: "Puma",
    color: "white",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 14,
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹150",
    company: "Puma",
    color: "black",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 15,
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Fusion Evo Golf Shoe",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹100",
    company: "Puma",
    color: "green",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 16,
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rainbow Chex Skate",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹100",
    company: "Vans",
    color: "red",
    category: "flats",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 17,
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Low-Top Trainers",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹100",
    company: "Vans",
    color: "white",
    category: "sandals",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 18,
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    title: "Vans Unisex Low-Top",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹100",
    company: "Vans",
    color: "blue",
    category: "sandals",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 19,
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Classic Bandana Sneakers",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹50",
    company: "Nike",
    color: "black",
    category: "sandals",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id: 20,
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Chunky High Heel",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    newPrice: "₹50",
    company: "Vans",
    color: "black",
    category: "heels",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id:21,
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Slip On Stiletto High Heel",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    
    newPrice: "₹100",
    company: "puma",
    color: "black",
    category: "heels",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id:22,
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "DREAM PAIRS Court Shoes",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
   
    newPrice: "₹150",
    company: "Nike",
    color: "red",
    category: "heels",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id:23,
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    
    newPrice: "₹200",
    company: "Nike",
    color: "red",
    category: "sneakers",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },

  {
    id:24,
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    title: "Low Mid Block Heels",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
   
    newPrice: "₹200",
    company: "Nike",
    color: "black",
    category: "heels",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id:25,
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    title: "Chunky High Heel",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    
    newPrice: "₹50",
    company: "Adidas",
    color: "black",
    category: "heels",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id:26,
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    title: "Amore Fashion Stilettos",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    
    newPrice: "₹150",
    company: "Adidas",
    color: "white",
    category: "heels",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id:27,
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
    title: "Bridal Sandals Glitter",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    
    newPrice: "₹50",
    company: "Adidas",
    color: "black",
    category: "heels",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
  {
    id:28,
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
    title: "Wedding Prom Bridal",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    
    newPrice: "₹50",
    company: "Adidas",
    color: "black",
    category: "flats",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
   /* Women Dress*/
  {
    id:29,
    img: "https://m.media-amazon.com/images/I/71Hy7lDZiaL._SY741_.jpg",
    title: "Lymio Dresses for Women ",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    
    newPrice: "₹50",
    company: "Polyester",
    color: "black",
    category: "Dress",
    description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
  },
 
{
  id:30,
  img: "https://m.media-amazon.com/images/I/71UL+IvOApL._AC_UL480_FMwebp_QL65_.jpg",
  title: "Casual Maxi Fit and Flare Dress",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "pink",
  category: "Dress",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:31,
  img: "https://m.media-amazon.com/images/I/61YN57FzrJL._SX569_.jpg",
  title: "Women's Bodycon Dress",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "Polyester",
  color: "black",
  category: "Dress",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:32,
  img: "https://m.media-amazon.com/images/I/61su15hZWKL._SY550_.jpg",
  title: "Women's Fitted Draped Dress ",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "Acotton",
  color: "blue",
  category: "Dress",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:33,
  img: "https://m.media-amazon.com/images/I/41gIzvp8HXL._SX679_.jpg",
  title: "Monte Carlo Womens Dress",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "black",
  category: "Dress",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:34,
  img: "https://m.media-amazon.com/images/I/71X2DPnLhPL._SY741_.jpg",
  title: "Beach Midi Dress For Women",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "Polyester",
  color: "pink",
  category: "Dress",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

{
  id:35,
  img: "https://m.media-amazon.com/images/I/413P10NEQDL._SY741_.jpg",
  title: "Women Dori Belt Dress Korean",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "black",
  category: "Dress",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:36,
  img: "https://m.media-amazon.com/images/I/51xaLglKw-L._SY741_.jpg",
  title: "Van Heusen Women Knee Length Dress",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "red",
  category: "Dress",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:37,
  img: "https://m.media-amazon.com/images/I/51NGpXTWxML._SY679_.jpg",
  title: "Women Casual Dress",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "Polyester",
  color: "white",
  category: "Dress",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:38,
  img: "https://m.media-amazon.com/images/I/613RE18HLqL._SY741_.jpg",
  title: "Styli Women Dress",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "red",
  category: "Dress",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

{
  id:39,
  img: "https://m.media-amazon.com/images/I/614Ds60NbYL._SY679_.jpg",
  title: "Maxi Fit and Flare Dress",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "Polyester",
  color: "green",
  category: "Dress",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:40,
  img: "https://m.media-amazon.com/images/I/616wQWIRYCL._SY679_.jpg",
  title: "A-Line Dress For Women",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "white",
  category: "Dress",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:41,
  img: "https://m.media-amazon.com/images/I/61qoFudH6DL._SY550_.jpg",
  title: "Fashion Dresses for Women",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "green",
  category: "Dress",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
/*T-shirts*/
{
  id:42,
  img: "https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_UL480_FMwebp_QL65_.jpg",
  title: "Regular Fit T-Shirt",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "black",
  category: "T-shirts",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:43,
  img: "https://m.media-amazon.com/images/I/71xamREF5TL._AC_UL480_FMwebp_QL65_.jpg",
  title: "Oversized T Shirt",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "white",
  category: "T-shirts",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:44,
  img: "https://m.media-amazon.com/images/I/71y2enCiPkS._SX522_.jpg",
  title: "Cotton T-Shirt",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cooton",
  color: "blue",
  category: "T-shirts",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:45,
  img: "https://m.media-amazon.com/images/I/61DNUreJbGL._SY679_.jpg",
  title: "Lymio T-Shirt",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "blue",
  category: "T-shirts",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:46,
  img: "https://m.media-amazon.com/images/I/61S5nUPVufL._SX679_.jpg",
  title: "Shoulder Boho T-Shirt",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "green",
  category: "T-shirts",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:47,
  img: "https://m.media-amazon.com/images/I/41CU5ub8KbL.jpg",
  title: "AUSK Polo T-shirt ",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "red",
  category: "T-shirts",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:48,
  img: "https://m.media-amazon.com/images/I/71r3W2+d-vL._SY679_.jpg",
  title: "Plain T Shirt",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "white",
  category: "T-shirts",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:49,
  img: "https://m.media-amazon.com/images/I/61XGqPNpy-L._SX522_.jpg ",
  title: "DAMENSCH T-Shirt",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "Polyester",
  color: "green",
  category: "T-shirts",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:50,
  img: "https://m.media-amazon.com/images/I/61oG1XGCqgL._SY550_.jpg",
  title: "Casual T-Shirt",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "pink",
  category: "T-shirts",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:51,
  img: "https://m.media-amazon.com/images/I/51Nd+qznAYL.jpg",
  title:"Oversized T-Shirt ",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "blue",
  category: "T-shirts",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

/*kids*/
{
  id:52,
  img: "https://m.media-amazon.com/images/I/31LSjuVMUIL.jpg",
  title: "Kids set",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "black",
  category: "kids",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:53,
  img: "https://m.media-amazon.com/images/I/71U1XW217gL._SY879_.jpg",
  title: "Casual Dress Kids",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "Polyester",
  color: "red",
  category: "kids",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:54,
  img: "https://m.media-amazon.com/images/I/41MPN-7FrML._SY879_.jpg",
  title: "Dress Girls Kids",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "Polyester",
  color: "black",
  category: "kids",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:55,
  img: "https://m.media-amazon.com/images/I/71eoPAKoQ0S._SY879_.jpg",
  title: "Kids Mini Frock",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "Polyester",
  color: "pink",
  category: "kids",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:56,
  img: "https://m.media-amazon.com/images/I/71R-469viNL._SX679_.jpg",
  title: "Kids wear",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "Polyester",
  color: "green",
  category: "kids",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:57,
  img: "https://m.media-amazon.com/images/I/711e60PrdhL._SX679_.jpg",
  title: "T-Shirt Kids",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "blue",
  category: "kids",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:58,
  img: "https://m.media-amazon.com/images/I/61Lsa7cELHL._SX679_.jpg",
  title: "T-Shirt Kids",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "Polyester",
  color: "pink",
  category: "kids",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:59,
  img: "https://m.media-amazon.com/images/I/41awfCd4sZL._SY879_.jpg",
  title: "Round Neck Kids T-Shirt",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "black",
  category: "kids",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:60,
  img: "https://m.media-amazon.com/images/I/61Vb2nVOWSL._SY741_.jpg",
  title: "T-Shirt for Kids",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "red",
  category: "kids",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:61,
  img: "https://m.media-amazon.com/images/I/61qiPCgx+aL._SY879_.jpg",
  title: "Round Neck Kids Tshirts",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "cotton",
  color: "blue",
  category: "kids",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

/*furniture*/
{
  id:62,
  img: "https://m.media-amazon.com/images/I/41PKIkGITxL._SX679_.jpg",
  title: "Wooden Cushion Chair",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
    
  newPrice: "₹50",
  company: "wooden",
  color: "black",
  category: "furniture",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:63,
  img: "https://m.media-amazon.com/images/I/41QRIXwG9LL._SY450_.jpg",
  title: "Dinning Chairs",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹200",
  company: "wooden",
  color: "black",
  category: "furniture",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:64,
  img: "https://m.media-amazon.com/images/I/41XzuOIjjjL._SX300_SY300_QL70_FMwebp_.jpg",
  title: "Plastic Arm Chair",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹200",
  company: "wooden",
  color: "black",
  category: "furniture",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

{
  id:65,
  img: "https://m.media-amazon.com/images/I/513I7-J-HqL._SX425_.jpg",
  title: "Fold-able Side Table",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹200",
  company: "wooden",
  color: "black",
  category: "furniture",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:66,
  img: "https://m.media-amazon.com/images/I/31efHGIFEnL._SY300_SX300_QL70_FMwebp_.jpg",
  title: "Folding Stool Table",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹200",
  company: "wooden",
  color: "black",
  category: "furniture",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:67,
  img: "https://m.media-amazon.com/images/I/41DDSMvkM3L._SY679_.jpg",
  title: "Wood Long Table",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹200",
  company: "wooden",
  color: "black",
  category: "furniture",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:68,
  img: "https://m.media-amazon.com/images/I/51uCEcdJSdL._SX425_.jpg",
  title: "Darius Metal Sofa",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹50",
  company: "wooden",
  color: "black",
  category: "furniture",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

{
  id:69,
  img: "https://m.media-amazon.com/images/I/61TK6i+JRTL._SX425_.jpg",
  title: " Matte Finish Metal Sofa",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹50",
  company: "metal",
  color: "black",
  category: "furniture",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

{
  id:70,
  img: "https://m.media-amazon.com/images/I/71yjDmh3AAL._SX425_.jpg",
  title: "Metal King Size Sofa",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
 
  newPrice: "₹200",
  company: "metal",
  color: "black",
  category: "furniture",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

{
  id:71,
  img: "https://m.media-amazon.com/images/I/51R9O2P6nnL._SX425_.jpg",
  title: "Modular Sofa Floor",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹200",
  company: "A",
  color: "white",
  category: "furniture",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

/*stationary*/
{
  id:72,
  img: "https://m.media-amazon.com/images/I/8124ZXp3nkL._SY355_.jpg",
  title: "Pentonic Pens",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹150",
  company: "Puma",
  color: "green",
  category: "stationary",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:73,
  img: "https://m.media-amazon.com/images/I/81UzpjCPU0L._SL1500_.jpg",
  title: "Solimo Notebooks",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹150",
  company: "Puma",
  color: "red",
  category: "stationary",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:74,
  img: "https://m.media-amazon.com/images/I/71ulyHAa-hL._SY342_.jpg",
  title: "Spiral Notebook",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹150",
  company: "Puma",
  color: "black",
  category: "stationary",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:75,
  img: "https://m.media-amazon.com/images/I/41RfsbWBmRL._SX300_SY300_QL70_FMwebp_.jpg",
  title: "Stationery Combo Gift Set",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹150",
  company: "Puma",
  color: "white",
  category: "stationary",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:76,
  img: "https://m.media-amazon.com/images/I/61V6Tz3pgIL._SX342_.jpg",
  title: "Paper Cutter",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹150",
  company: "Puma",
  color: "black",
  category: "stationary",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

{
  id:77,
  img: "https://m.media-amazon.com/images/I/51hNifr+-IL._SX300_SY300_.jpg",
  title: "Pencil Pouch",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹100",
  company: "Puma",
  color: "green",
  category: "stationary",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:78,
  img: "https://m.media-amazon.com/images/I/51ApXbbYLcL._SX300_SY300_QL70_FMwebp_.jpg ",
  title: "Portable Capacity Pencil Pouch",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹100",
  company: "Vans",
  color: "red",
  category: "stationary",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:79,
  img: "https://m.media-amazon.com/images/I/61IaccxR6zL._SY355_.jpg",
  title: "Reynolds SELECTO Highlighter",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹100",
  company: "Vans",
  color: "white",
  category: "stationary",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:80,
  img: "https://m.media-amazon.com/images/I/41PCG1INzCL._SX300_SY300_QL70_FMwebp_.jpg",
  title: "Hauser Pens",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹100",
  company: "Vans",
  color: "blue",
  category: "stationary",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:81,
  img: "https://m.media-amazon.com/images/I/81-uPq+MNHL._SX425_.jpg",
  title: "Brustro Clip Box",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹50",
  company: "Nike",
  color: "black",
  category: "stationary",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

/*earbuds*/
{
  id:82,
  img: "https://m.media-amazon.com/images/I/61PJk4fAcYL._SY355_.jpg",
  title: "boAt Airdopes 170",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹50",
  company: "boat",
  color: "black",
  category: "earbuds",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:83,
  img: "https://m.media-amazon.com/images/I/61g3HFZ59yL._SY355_.jpg",
  title: "Noise Newly Launched Buds",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹100",
  company: "noise",
  color: "green",
  category: "earbuds",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:84,
  img: "https://m.media-amazon.com/images/I/311qIs7vzfL._SX300_SY300_QL70_FMwebp_.jpg",
  title: "Noise Buds VS104",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
 
  newPrice: "₹150",
  company: "noise",
  color: "blue",
  category: "earbuds",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:85,
  img: "https://m.media-amazon.com/images/I/41cw2xtZNHL._SX300_SY300_QL70_FMwebp_.jpg",
  title: "True Wireless Earbuds",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹200",
  company: "noise",
  color: "black",
  category: "earbuds",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:86,
  img: "https://m.media-amazon.com/images/I/31Ps-We8iwL._SX300_SY300_QL70_FMwebp_.jpg",
  title: "Noise Buds Connect",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
 
  newPrice: "₹150",
  company: "noise",
  color: "green",
  category: "earbuds",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:87,
  img: "https://m.media-amazon.com/images/I/71TjDk7dnLL._SX425_.jpg",
  title: "Boult Audio Z40 Pro",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹50",
  company: "Boult",
  color: "blue",
  category: "earbuds",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:88,
  img: "https://m.media-amazon.com/images/I/51ePBbIYSgL._SY355_.jpg",
  title: "JBL Tune 235NC",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹50",
  company: "JBL",
  color: "black",
  category: "earbuds",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:89,
  img: "https://m.media-amazon.com/images/I/312WzWap4vL._SX300_SY300_QL70_FMwebp_.jpg",
  title: "JBL Wave Buds in-Ear",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹150",
  company: "JBL",
  color: "blace",
  category: "earbuds",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

/*watches*/
{
  id:90,
  img: "https://m.media-amazon.com/images/I/41PGIqXfLzL._SX300_SY300_QL70_FMwebp_.jpg",
  title: "Titan Crest Smart Watch",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹50",
  company: "Titan",
  color: "blue",
  category: "watch",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:91,
  img: "https://m.media-amazon.com/images/I/71XTM9k5EVL._AC_UL480_FMwebp_QL65_.jpg",
  title: "Titan Smart 3 Watch",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹50",
  company: "Titan",
  color: "black",
  category: "watch",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:92,
  img: "https://m.media-amazon.com/images/I/51IwtamjQzL._AC_UL480_FMwebp_QL65_.jpg",
  title: "Titan Evoke Smart Watch",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  
  newPrice: "₹50",
  company: "Titan",
  color: "blue",
  category: "watch",
  description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

{
  id:93,
img: "https://m.media-amazon.com/images/I/7199KgYBOjL._AC_UL480_FMwebp_QL65_.jpg",
title: "Titan Mirage SmartWatch",
star: <AiFillStar className="rating-star" />,
reviews: "(123 reviews)",
  
newPrice: "₹50",
company: "Titan",
color: "black",
category: "watch",
description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:94,
img: "https://m.media-amazon.com/images/I/61BAiDG0Z5L._AC_UL480_QL65_.jpg",
title: "Casio Resin G-Shock",
star: <AiFillStar className="rating-star" />,
reviews: "(123 reviews)",
  
newPrice: "₹50",
company: "Casio",
color: "blue",
category: "watch",
description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:95,
img: "https://m.media-amazon.com/images/I/61lOtqGFvTL._AC_UL480_QL65_.jpg",
title: "Casio Men's G-Shock Watch",
star: <AiFillStar className="rating-star" />,
reviews: "(123 reviews)",
  
newPrice: "₹50",
company: "Casio",
color: "black",
category: "watch",
description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:96,
img: "https://m.media-amazon.com/images/I/61IMRs+o0iL._AC_UL480_QL65_.jpg",
title: "boat Xtend Smart Watch",
star: <AiFillStar className="rating-star" />,
reviews: "(123 reviews)",
  
newPrice: "₹50",
company: "boat",
color: "black",
category: "watch",
description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:97,
img: "https://m.media-amazon.com/images/I/71MuoECSNPL._AC_UL480_QL65_.jpg",
title: "boat Wave Sigma",
star: <AiFillStar className="rating-star" />,
reviews: "(123 reviews)",
  
newPrice: "₹50",
company: "boat",
color: "blue",
category: "watch",
description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

{
  id:98,
img: "https://m.media-amazon.com/images/I/711c-tnMhgL._AC_UL480_QL65_.jpg",
title: "boat Lunar Orb",
star: <AiFillStar className="rating-star" />,
reviews: "(123 reviews)",
  
newPrice: "₹50",
company: "boat",
color: "black",
category: "watch",
description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:99,
img: "https://m.media-amazon.com/images/I/61R8aiy+-9L._AC_UL480_QL65_.jpg",
title: "boat Xtend Smart Watch",
star: <AiFillStar className="rating-star" />,
reviews: "(123 reviews)",
  
newPrice: "₹50",
company: "boat",
color: "green",
category: "watch",
description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},
{
  id:100,
img: "https://m.media-amazon.com/images/I/71DqqFHYL7L._AC_UL480_QL65_.jpg",
title: "boat Flash Smart Watch",
star: <AiFillStar className="rating-star" />,
reviews: "(123 reviews)",
  
newPrice: "₹50",
company: "boat",
color: "red",
category: "watch",
description: "Shoes' Outsole- Pillo Foam sole ensures your steps are cushioned with every landing. Take every stride comfortably with the impact protection of the outsole. These shoes for men are a perfect match for your on-the-go lifestyle.."
},

];

export default data;
