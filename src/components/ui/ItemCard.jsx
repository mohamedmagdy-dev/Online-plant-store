// Icon
import pluseIcon from "../../assets/icons/pluse-icon.svg";

// Ui elements
import { RoundedButton, Rate } from "./UiElements";

// React router
import { Link } from "react-router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";

// Toast
import toast from "react-hot-toast";

export default function ItemCard({
  rate = 5,
  title = "Title",
  price = 40,
  plantImg,
  product = {},
}) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.products);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added to cart!");
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product));
      toast.success("Product removed from wishlist!");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Product added to wishlist!");
    }
  };

  return (
    <article className="h-158.5 w-full md:w-82.25 flex flex-col justify-between items-center relative">
      <Link className="relative w-full flex justify-center">
        <img src={plantImg} alt={title + " plant"} width={325} height={333} />
        <button
          onClick={handleToggleWishlist}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={isInWishlist ? "#2af598" : "none"}
            stroke={isInWishlist ? "#009efd" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </Link>
      <div className="cardActions w-full h-65 p-9.5 bg-white rounded-[50px] flex flex-col justify-between drop-shadow-[0_7px_7px_#00000040] mt-10">
        <div>
          <Link>
            <h3 className="text-abyss text-[32px] font-medium mb-1.75 truncate">
              {title}
            </h3>
          </Link>
          <div className="flex gap-1">
            <Rate rate={rate} />
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <span className="text-abyss text-[32px] font-medium">${price}</span>
          <RoundedButton
            buttonIcon={pluseIcon}
            altText="Pluse Icon"
            style="from-white to-white"
            onClick={handleAddToCart}
          />
        </div>
      </div>
      <div className="cardBg h-127.5 w-full -z-1 bg-mist absolute bottom-0 rounded-[50px]"></div>
    </article>
  );
}
