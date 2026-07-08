// UiElements
import { PriceSlider, Rate } from "./ui/UiElements";

//Redux
import { useDispatch } from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
  toggleCategory,
  toggleRating,
} from "../features/filter/filterSlice";

import { useSelector } from "react-redux";

const categories = [
  {
    id: "guest_room",
    label: "Guest Room",
  },
  {
    id: "living_room",
    label: "Living Room",
  },
  {
    id: "bed_room",
    label: "Bedroom",
  },
];

const ratings = [
  {
    id: 5,
    label: "5",
  },
  {
    id: 4,
    label: "4",
  },
  {
    id: 3,
    label: "3",
  },
  {
    id: 2,
    label: "2",
  },
  {
    id: 1,
    label: "1",
  },
];

export default function ProductsFilter() {
  const dispatch = useDispatch();

  const { category, minPrice, maxPrice, rating } = useSelector(
    (state) => state.filter,
  );

  const MIN_PRICE = 0;
  const MAX_PRICE = 1000;

  const handleMinPrice = (e) => {
    dispatch(setMinPrice(Math.min(Number(e.target.value), maxPrice)));
  };

  const handleMaxPrice = (e) => {
    dispatch(setMaxPrice(Math.max(Number(e.target.value), minPrice)));
  };

  return (
    <section className="shop_filter lg:min-w-[300px]">
      <h1 className="text-abyss font-semibold text-5xl mb-10">Filters</h1>
      <form>
        <h2 className="text-abyss font-semibold text-2xl mb-3">Category</h2>
        <ul className="text-abyss text-lg font-medium mb-5">
          {categories.map((cat) => (
            <li key={cat.id}>
              <input
                type="checkbox"
                name=""
                id={cat.id}
                checked={category.includes(cat.id)}
                onChange={() => {
                  dispatch(toggleCategory(cat.id));
                }}
              />
              <label htmlFor={cat.id}> {cat.label}</label>
            </li>
          ))}
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
            {ratings.map((rat) => (
              <li key={rat.id} className="flex items-center gap-1.5 mb-2">
                <input
                  type="checkbox"
                  id={rat.label}
                  checked={rating.includes(rat.id)}
                  onChange={() => {
                    dispatch(toggleRating(rat.id));
                  }}
                />
                <label
                  htmlFor={rat.label}
                  className="flex items-center gap-1.5"
                >
                  {rat.label} <Rate rate={rat.id} />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </section>
  );
}
