import breadImg from "../images/fr_bread.jpg";
import milkImg from "../images/milk.jpg";
import butterImg from "../images/butter.png";

const products = [
  {
    title: "Whole french bread",
    description: "Made in paris and destinated to the whole world",
    price: 1.0,
    hasDiscount: true,
    image: breadImg,
    quantity: 0,
    id: 0,
  },
  {
    title: "Fresh Swiss milk",
    description: "Semi skimed milk that comes straight from the aples farmers",
    price: 1.15,
    hasDiscount: true,
    image: milkImg,
    quantity: 0,
    id: 1,
  },
  {
    title: "Butter",
    description: "Producer by us to ensure a high quality butter",
    price: 0.8,
    hasDiscount: false,
    image: butterImg,
    quantity: 0,
    id: 2,
  },
];

export default products;
