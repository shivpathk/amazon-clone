// React
import React from "react";
// React router
import { Link } from "react-router-dom";
// Components
import Navbar from "../components/Navbar/Navbar";
// MUI
import DoneIcon from "@mui/icons-material/Done";

function SuccessScreen() {
  return (
    <>
      <Navbar />
      <div className='px-3'>
        <div className='max-w-screen-lg mx-auto bg-white shadow-lg mt-10 p-3'>
          <h1 className='text-2xl font-semibold'>
            <DoneIcon className='bg-green-600 text-white rounded-full p-1 mr-2' style={{ fontSize: "1.8rem" }} /> Thank you, your
            order has been confirmed!
          </h1>
          <p className='my-5'>
            Thank you for shopping with us. We'll send a confirmation once your item has shipped, if you would like to check the
            status of your order(s) please press the link below.
          </p>
          <Link to='/orders' className='basket_btn block text-center no-underline'>
            Go to my orders
          </Link>
        </div>
      </div>
    </>
  );
}

export default React.memo(SuccessScreen);
