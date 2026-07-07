// UiElements
import { PriceSlider, Rate } from "./ui/UiElements";

//react
import { useState } from "react";

export default function ProductsFilter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const MIN_PRICE = 0;
  const MAX_PRICE = 1000;

  const handleMinPrice = (e) => {
    setMinPrice(Math.min(Number(e.target.value), maxPrice));
  };

  const handleMaxPrice = (e) => {
    setMaxPrice(Math.max(Number(e.target.value), minPrice));
  };

  return (
    <section className="shop_filter lg:min-w-[300px]">
      <h1 className="text-abyss font-semibold text-5xl mb-10">Filters</h1>
      <form>
        <h2 className="text-abyss font-semibold text-2xl mb-3">Category</h2>
        <ul className="text-abyss text-lg font-medium mb-5">
          <li>
            <input type="checkbox" name="" id="Guest Room" />
            <label htmlFor="Guest Room"> Guest Room</label>
          </li>
          <li>
            <input type="checkbox" name="" id="Living Room" />
            <label htmlFor="Living Room"> Living Room</label>
          </li>
          <li>
            <input type="checkbox" name="" id="Bedroom" />
            <label htmlFor="Bedroom"> Bedroom</label>
          </li>
        </ul>
        <div className="py-5 mb-5 border-y border-gray/30">
          <h2 className="text-abyss font-semibold text-2xl mb-3">
            Price Range
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="text-abyss ">Min Price: {minPrice}$</span>

              <PriceSlider
                min={MIN_PRICE}
                max={MAX_PRICE}
                step={1}
                value={minPrice}
                handleChange={handleMinPrice}
                style=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-abyss ">Max Price: {maxPrice}$</span>
              <PriceSlider
                min={MIN_PRICE}
                max={MAX_PRICE}
                step={1}
                value={maxPrice}
                handleChange={handleMaxPrice}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-abyss font-semibold text-2xl mb-3">Rating</h2>
          <ul className="text-abyss  font-medium">
            <li className="flex items-center gap-1.5 mb-2">
              <input type="checkbox" name="5star" id="5star" />
              <label htmlFor="5star" className="flex items-center gap-1.5">
                5 <Rate rate={5} />
              </label>
            </li>
            <li className="flex items-center gap-1.5 mb-2">
              <input type="checkbox" name="4star" id="4star" />
              <label htmlFor="4star" className="flex items-center gap-1.5">
                4 <Rate rate={4} />
              </label>
            </li>
            <li className="flex items-center gap-1.5 mb-2">
              <input type="checkbox" name="3star" id="3star" />
              <label htmlFor="3star" className="flex items-center gap-1.5">
                3 <Rate rate={3} />
              </label>
            </li>
            <li className="flex items-center gap-1.5 mb-2">
              <input type="checkbox" name="" id="2star" />
              <label htmlFor="2star" className="flex items-center gap-1.5">
                2 <Rate rate={2} />
              </label>
            </li>
            <li className="flex items-center gap-1.5">
              <input type="checkbox" name="" id="1star" />
              <label htmlFor="1star" className="flex items-center gap-1.5">
                1 <Rate rate={1} />
              </label>
            </li>
          </ul>
        </div>
      </form>
    </section>
  );
}
