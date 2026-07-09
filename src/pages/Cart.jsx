import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { toggleHeaderTheme } from "../features/theme/themeSlice";
import { addToCart, decreaseQuantity, removeFromCart, clearCart } from "../features/cart/cartSlice";
import { CurvedButton } from "../components/ui/UiElements";
import toast from "react-hot-toast";

export default function Cart() {
  const dispatch = useDispatch();
  const { products, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(toggleHeaderTheme(false));
  }, [dispatch]);

  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from cart");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart cleared");
  };

  return (
    <main className="py-35 bg-[#f8f9fa] min-h-[80vh]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-abyss">Shopping Cart</h1>
          {products.length > 0 && (
            <button 
              onClick={handleClearCart}
              className="text-red-500 font-semibold hover:text-red-700 transition-colors cursor-pointer"
            >
              Clear Cart
            </button>
          )}
        </div>

        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[40vh] bg-white rounded-[40px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-100 p-10">
            <h2 className="text-3xl font-bold text-abyss mb-4">Your cart is empty</h2>
            <p className="text-gray mb-8">Looks like you haven't added any plants to your cart yet.</p>
            <Link to="/shop">
              <CurvedButton buttonContent="Start Shopping" />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cart Items List */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              {products.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-[30px] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-gray-100 relative group">
                  <div className="w-32 h-32 bg-mist/20 rounded-[20px] flex items-center justify-center overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-abyss mb-2">{item.name}</h3>
                    <p className="text-sky font-bold text-xl">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-gray-50 rounded-full px-2 py-1 border border-gray-200">
                      <button 
                        onClick={() => handleDecrease(item.id)}
                        className="text-abyss text-2xl font-bold px-3 py-1 hover:text-sky transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xl font-bold text-abyss w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => handleIncrease(item)}
                        className="text-abyss text-2xl font-bold px-3 py-1 hover:text-sky transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleRemove(item.id)}
                    className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 w-10 h-10 flex items-center justify-center bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-[40px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 sticky top-32">
                <h3 className="text-2xl font-extrabold text-abyss mb-6">Order Summary</h3>
                <div className="flex justify-between items-center mb-4 text-gray-dark font-medium text-lg">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-6 text-gray-dark font-medium text-lg">
                  <span>Shipping</span>
                  <span className="text-mint font-bold">Free</span>
                </div>
                <div className="border-t border-gray-100 pt-6 mb-8 flex justify-between items-center">
                  <span className="text-2xl font-bold text-abyss">Total</span>
                  <span className="text-3xl font-extrabold bg-linear-to-r from-mint to-sky bg-clip-text text-transparent">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <CurvedButton 
                  buttonContent="Proceed to Checkout" 
                  style="w-full text-xl shadow-lg shadow-sky/20" 
                  onClick={() => toast.success("Checkout process started!")} 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}