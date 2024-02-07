// React
import React from "react";
// React router
import { Link } from "react-router-dom";
// MUI
import LanguageIcon from "@mui/icons-material/Language";
import CopyrightIcon from "@mui/icons-material/Copyright";

function FooterMain() {
  return (
    <div>
      {/* the lists */}
      <div className='border-b border-gray-500'>
        <div className='max-w-screen-lg mx-auto pl-5 lg:pl-0 py-20 grid sm:grid-cols-2 md:grid-cols-3 lg:justify-items-center lg:grid-cols-4'>
          {/* List 1 */}
          <ul className='text-sm w-max mb-5 md:mb-0 md:mx-auto'>
            <h1 className='font-bold mb-2'>Get to Know Us</h1>
            <li className='footer_list_item'>Careers</li>
            <li className='footer_list_item'>Blog</li>
            <li className='footer_list_item'>About Amazon</li>
            <li className='footer_list_item'>Amazon Devices</li>
          </ul>

          {/* List 2 */}
          <ul className='text-sm w-max mb-5 md:mb-0 md:mx-auto'>
            <h1 className='font-bold mb-2'>Make Money With Us</h1>
            <li className='footer_list_item'>Sell products on Amazon</li>
            <li className='footer_list_item'>Sell on Amazon Business</li>
            <li className='footer_list_item'>Sell apps on Amazon</li>
            <li className='footer_list_item'>Become an Affiliate</li>
            
          </ul>

          {/* List 3 */}
          <ul className='text-sm w-max mb-5 md:mb-0 md:mx-auto'>
            <h1 className='font-bold mb-2'>Amazon Products</h1>
            <li className='footer_list_item'>Amazon Business </li>
            <li className='footer_list_item'>Amazon Music</li>
            <li className='footer_list_item'>Amazon Mini TV</li>
            <li className='footer_list_item'>Amazon Pay</li>
          </ul>

          {/* List 4 */}
          <ul className='text-sm w-max md:mx-auto'>
            <h1 className='font-bold mb-2'>Let Us Help You</h1>
            <li className='footer_list_item'>Your Account</li>
            <li className='footer_list_item'>Your Orders</li>
            <li className='footer_list_item'>Amazon Assistant</li>
            <li className='footer_list_item'>Help</li>
          </ul>
        </div>
      </div>

      {/* the logo, lang and etc. */}
      <div className='flex items-center flex-col md:flex-row w-max mx-auto py-10'>
        {/* Logo */}
        <Link to='/'>
          <img className='w-24 md:w-20' src='https://links.papareact.com/f90' alt='Logo' />
        </Link>

        {/* lang, money and country */}
        <ul className='sm:flex sm:items-center mt-3 md:mt-0 md:ml-32'>
          <li className='footer_info'>
            <LanguageIcon className='mr-2' style={{ fontSize: "1.2rem" }} />
            English
          </li>
          <li className='footer_info'>
            <span className='font-bold mr-2'></span> ₹ - Indian Rupee
          </li>
          <li className='footer_info'>
            <img
              className='w-5 h-3.5 mr-2'
              src='https://www.freepnglogos.com/uploads/indian-flag-png/indian-flag-flag-paint-face-photo-editing-0.png'
              alt='Flag'
            />
            India
          </li>
         <li className='flex items-center' title='https://shiv-pathk-portfolio.netlify.app/'>
           <CopyrightIcon style={{ fontSize: "1.2rem" }} />
           <a href='https://shiv-pathk-portfolio.netlify.app/' target='_blank' rel='noreferrer'>
             2024 Designed by Shivam Kumar
           </a>
         </li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(FooterMain);
