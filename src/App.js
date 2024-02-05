// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
// Components
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import OrdersScreen from "./screens/OrdersScreen";
import SuccessScreen from "./screens/SuccessScreen";

function App() {
  const sideIsOpen = useSelector((state) => state.sidebar.value.open);

  return (
    <div className={`bg-gray-100 ${sideIsOpen ? "h-screen overflow-y-hidden" : "h-full overflow-y-visible"}`}>
      <Router>
        <Routes>
          {/* HomeScreen */}
          <Route path="/" element={<HomeScreen />} />
          {/* Basket(cart) screen */}
          <Route path="/cart" element={<CartScreen />} />
          {/* Seccess screen */}
          <Route path="/success" element={<SuccessScreen />} />
          {/* Checkout(orders) screen */}
          <Route path="/orders" element={<OrdersScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
