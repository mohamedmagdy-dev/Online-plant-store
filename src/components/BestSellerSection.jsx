// React Router
import { Link } from "react-router";
import { useEffect } from "react";

// icons
import rightArrow from "../assets/icons/right-arrow.svg";

// Components
import ItemCard from "./ui/ItemCard";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../features/products/productsSlice";

export default function BestSellerSection() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProductsData("/Api/products.json"));
    }
  }, [dispatch, products.length]);

  const bestSellers = products.slice(0, 3);

  return (
    <section className="pb-35">
      <div className="container px-4 flex gap-9.5 justify-center 2xl:justify-between items-center flex-wrap">
        <div className="info ">
          <h2 className="text-5xl md:text-[64px] text-abyss font-medium mb-10.5">
            Best Seller
            <br /> Product
          </h2>
          <Link to="/shop" className="text-gray-dark flex gap-5 font-medium">
            See all collection
            <img src={rightArrow} alt="right Arrow" width={20} height={21} />
          </Link>
        </div>
        <div className="cards flex gap-8 flex-wrap justify-center min-h-[400px] items-center">
          {bestSellers.map((product) => (
            <ItemCard
              key={product.id}
              rate={product.rating}
              title={product.name}
              price={product.price}
              plantImg={product.image}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
