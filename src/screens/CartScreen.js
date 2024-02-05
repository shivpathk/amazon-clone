// React
import { useEffect } from "react";
// React router
import { Link } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectItems, clearBasket } from "../features/basket";
import { Deactivate } from "../features/sidebar";
// Components
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import BasketCard from "../components/Basket/BasketCard";
import Subtotal from "../components/Basket/Subtotal";
// UI
import emptyCart from "../assets/images/empty_cart.svg";

function CartScreen() {
  // redux
  const basket = useSelector(selectItems);
  const dispatch = useDispatch();
  // resetting the state of sidebar
  useEffect(() => {
    dispatch(Deactivate());
  }, [dispatch]);

  // JSX 
  return (
    <div>
      <Navbar />

      {/* MAIN CONTENT */}
      {basket.length === 0 ? (
        <div className='text-center py-20'>
          <img className='w-3/12 mx-auto' src={emptyCart} alt='Empty cart' />
          <h1 className='my-5 font-bold text-xl'>Your shopping basket is empty ...</h1>
          <Link to='/' className='bg-amazon_yellow-dark py-2 px-10 rounded-full' title='Go back to home page'>
            Back to Home
          </Link>
        </div>
      ) : (
        <div className='max-w-screen-2xl mx-auto grid grid-cols-6 p-2 bg-transparent md:bg-white shadow-none md:shadow-lg mb-20'>
          {/* left side */}
          <div className='col-span-6 md:col-span-5 bg-white shadow-lg md:shadow-none'>

            {/* Title */}
            <h1 className='font-bold text-gray-800 text-3xl border-b border-gray-300 pb-4 mb-10'>Your Shopping Basket</h1>

            {/* Basket Cards */}
            {basket.map(({ id, title, price, category, description, image, rating }, i) => {
              return (
                <BasketCard
                  key={i}
                  id={id}
                  title={title}
                  price={price}
                  category={category}
                  description={description}
                  image={image}
                  rating={rating}
                />
              );
            })}

            {/* Clear basket btn */}
            <div className='text-center py-10'>
              <button className='clear_btn' onClick={() => dispatch(clearBasket())}>
                Clear Basket !
              </button>
            </div>
          </div>

          {/* right side */}
          <Subtotal />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default CartScreen;
