// React
import { useEffect } from "react";

// Assets
import plantImg from "../assets/imgs/plant-1.png";

// Components
import ProductsFilter from "../components/ProductsFilter";
import ProductsCard from "../components/ui/ItemCard";
import Pagination from "../components/ui/Pagination";

export default function Shop({ setIsHeaderTransparent }) {
  useEffect(() => {
    setIsHeaderTransparent(false);
  }, []);

  return (
    <main className="py-35">
      <div className="container px-4 flex flex-col lg:flex-row gap-8 ">
        <ProductsFilter />
        <section>
          <p className="ml-auto w-fit mb-8 text-gray  max-sm:mt-10 max-sm:mx-auto">Showing All Products 1-9 of 24 Product</p>
          <div className="flex flex-wrap gap-x-8 gap-y-20 justify-center xl:justify-end">
            <ProductsCard rate={5} title="Title" price={40} plantImg={plantImg} />
            <ProductsCard rate={5} title="Title" price={40} plantImg={plantImg} />
            <ProductsCard rate={5} title="Title" price={40} plantImg={plantImg} />
            <ProductsCard rate={5} title="Title" price={40} plantImg={plantImg} />
            <ProductsCard rate={5} title="Title" price={40} plantImg={plantImg} />
            <ProductsCard rate={5} title="Title" price={40} plantImg={plantImg} />
            <ProductsCard rate={5} title="Title" price={40} plantImg={plantImg} />
            <ProductsCard rate={5} title="Title" price={40} plantImg={plantImg} />
            <ProductsCard rate={5} title="Title" price={40} plantImg={plantImg} />
          </div>
          <Pagination />
        </section>
      </div>
    </main>
  );
}
