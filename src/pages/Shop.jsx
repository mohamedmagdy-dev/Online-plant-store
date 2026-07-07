// React
import { useEffect } from "react";

// Components
import ProductsFilter from "../components/ProductsFilter";
import ProductsCard from "../components/ui/ItemCard";
import Pagination from "../components/ui/Pagination";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../features/products/productsSlice";

export default function Shop({ setIsHeaderTransparent }) {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsData("/Api/products.json"));
  }, [dispatch]);

  console.log(products);
  useEffect(() => {
    setIsHeaderTransparent(false);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="py-35">
      <div className="container px-4 flex flex-col lg:flex-row gap-8 ">
        <ProductsFilter />
        <section>
          <p className="ml-auto w-fit mb-8 text-gray  max-sm:mt-10 max-sm:mx-auto">
            Showing All Products 1-9 of 24 Product
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-20 justify-center xl:justify-end">
            {!loading && products.map((product) => {
              return (
                <ProductsCard
                  key={product.id}
                  rate={product.rating}
                  title={product.name}
                  price={product.price}
                  plantImg={product.image}
                  product={product}
                />
              );
            })}
          </div>
          <Pagination />
        </section>
      </div>
    </main>
  );
}
