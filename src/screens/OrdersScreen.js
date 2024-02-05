// React
import { useEffect } from "react";
// React router
import { Link} from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { clearOrders, selectItems } from "../features/orders";
import { Deactivate } from "../features/sidebar";
// Components
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import OrderItem from "../components/Orders/OrderItem";
// UI
import emptyOrder from "../assets/images/empty_order.svg";

function OrdersScreen() {
  // redux
  const orders = useSelector(selectItems);
  const dispatch = useDispatch();
  // resetting the state of sidebar
  useEffect(() => {
    dispatch(Deactivate());
  }, [dispatch]);

  // JSX 
  return (
    <>
      <Navbar />

      {orders.length === 0 ? (
        <div className='text-center py-20 px-3'>
          <img className='w-3/12 md:w-2/12 mx-auto animate-rotate' src={emptyOrder} alt='Empty order list' />
          <h1 className='my-6 font-bold text-xl'>
            Your order list is empty! <br /> Mabye it's time to order something ...
          </h1>
          <Link to="/" className='bg-amazon_yellow-dark py-2 px-10 rounded-full' title='Go back to home page'>
            Back to Home
          </Link>
        </div>
      ) : (
        <div className='bg-white px-3'>
          <main className='max-w-screen-lg mx-auto py-10'>
            <h1 className='text-3xl font-bold border-b-2 border-stone-300 pb-1'>Your Orders</h1>
            <h1 className='mt-2 font-bold mb-14'>{orders.length} order(s)</h1>

            {orders.map((order, i) => {
              return <OrderItem key={i} order={order} />;
            })}
          </main>

          {/* Clear-list btn */}
          <div className='text-center py-10'>
            <button className='clear_btn' onClick={() => dispatch(clearOrders())}>
              Clear Basket !
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default OrdersScreen;
