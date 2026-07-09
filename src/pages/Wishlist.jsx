import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { clearWishlist } from "../features/wishlist/wishlistSlice";

// Components
import ItemCard from "../components/ui/ItemCard";
import { CurvedButton } from "../components/ui/UiElements";

export default function Wishlist({ setIsHeaderTransparent }) {
  const wishlistItems = useSelector((state) => state.wishlist.products);
  const dispatch = useDispatch();

  // Handle Clear Wishlist
  const handleClearWishlist = () => {
    dispatch(clearWishlist())
  };

  useEffect(() => {
    setIsHeaderTransparent(false);
  }, [setIsHeaderTransparent]);

  return (
    <main className="py-35">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center lg:justify-between gap-8 flex-wrap">
          <h1 className="text-5xl font-bold text-abyss mb-10 ">My Wishlist</h1>
          <CurvedButton buttonContent="Clear" onClick={handleClearWishlist} />
        </div>
        {wishlistItems.length === 0 ? (
          <div className="flex items-center justify-center min-h-[40vh] text-abyss text-2xl font-semibold">
            Your wishlist is empty.
          </div>
        ) : (
          <div className="flex flex-wrap gap-x-8 gap-y-20 justify-center">
            {wishlistItems.map((product) => (
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
        )}
      </div>
    </main>
  );
}
