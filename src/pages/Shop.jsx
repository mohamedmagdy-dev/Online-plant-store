// React
import { useEffect, useMemo, useState } from "react";

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
  const { category, minPrice, maxPrice, rating } = useSelector(
    (state) => state.filter,
  );

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = firstIndex + itemsPerPage;

  useEffect(() => {
    setCurrentPage(1);
  }, [category, rating, minPrice, maxPrice]);

  // Fetch Products Data
  useEffect(() => {
    dispatch(fetchProductsData("/Api/products.json"));
    setIsHeaderTransparent(false);
  }, [dispatch, setIsHeaderTransparent]);

  // Filter Products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        category.length > 0 ? category.includes(product.category) : true;
      const ratingMatch =
        rating.length > 0 ? rating.includes(product.rating) : true;
      return (
        categoryMatch &&
        product.price >= minPrice &&
        product.price <= maxPrice &&
        ratingMatch
      );
    });
  }, [products, category, minPrice, maxPrice, rating]);

  // Filtered Products
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

  // Handel Products Fetch Error
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-abyss text-2xl font-semibold">
        Error: {error}
      </div>
    );
  }

  // Handel Products Loading
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-abyss text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <main className="py-35">
      <div className="container px-4 flex flex-col lg:flex-row gap-8 ">
        <ProductsFilter />
        <section className="w-full">
          <p className="ml-auto w-fit mb-8 text-gray  max-sm:mt-10 max-sm:mx-auto">
            Showing All Products{" "}
            {filteredProducts.length === 0 ? 0 : firstIndex + 1}-
            {Math.min(lastIndex, filteredProducts.length)} of{" "}
            {filteredProducts.length} Product
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-20 justify-center xl:justify-end">
            {!loading &&
              currentProducts.length > 0 &&
              currentProducts.map((product) => {
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
            {!loading && currentProducts.length === 0 && (
              <div className="w-full flex items-center justify-center min-h-[50vh] text-abyss text-2xl font-semibold">
                No Products Found
              </div>
            )}
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={filteredProducts.length}
          />
        </section>
      </div>
    </main>
  );
}
