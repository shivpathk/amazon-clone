// React router
import { Link } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
import { selectItems } from "../../features/basket";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// MUI
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import DiamondIcon from "@mui/icons-material/Diamond";
import RouterIcon from "@mui/icons-material/Router";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function NavbarTop() {

  const { loginWithRedirect, logout, user } = useAuth0();

  // Accessing redux
  const basketItmes = useSelector(selectItems);

  // JSX 
  return (
    <div className='bg-amazon_blue-dark px-2 pt-3 pb-2 md:py-1.5 md:flex md:items-center'>
      {/* left side */}
      <div className='flex items-center flex-grow'>
        {/* Logo */}
        <Link to='/'>
          <img className='w-28 sm:w-24' src='https://links.papareact.com/f90' alt='Logo' />
        </Link>

        {/* Deliver to */}
        <div className='hidden mx-5 lg:flex lg:items-end'>
          <FmdGoodOutlinedIcon className='text-white' style={{ fontSize: "1.4rem" }} />
          <h1 className='text-white text-xs'>
            Deliver to <br />
            <span className='font-extrabold m-3'>India</span>
          </h1>
        </div>

        {/* search form */}
        <form className='ml-5 md:mr-5 lg:ml-0 bg-white rounded flex items-center flex-grow'>
          {/* dropdown start */}
          <div className='inline-block relative group'>
            <button
              className='bg-slate-100 hover:bg-slate-300 focus:bg-slate-300 border-r border-slate-300 rounded-l text-gray-600 py-2 md:py-3 px-2 text-sm flex items-center transition-all duration-300'
              aria-expanded='true'
              aria-haspopup='true'
              onClick={(e) => e.preventDefault()}
            >
              All <ArrowDropDownIcon className='ml-2' style={{ fontSize: "1.15rem" }} />
            </button>
            {/* menu */}
            <ul className='group-focus-within:block absolute hidden bg-white border border-black z-20'>
              <Link to='/' className='dropdown_item'>
                <RouterIcon className='mr-2' />
                Electronics
              </Link>
              <Link to='/' className='dropdown_item'>
                <DiamondIcon className='mr-2' /> Jewelery
              </Link>
              <Link to='/' className='dropdown_item'>
                <ManIcon className='mr-2' />
                Men's Clothing
              </Link>
              <Link to='/' className='dropdown_item'>
                <WomanIcon className='mr-2' />
                Women's Clothing
              </Link>
            </ul>
          </div>
          {/* dropdown end */}
          <input
            className='focus:outline-none px-3 py-1 md:py-2 w-full placeholder:text-gray-300 placeholder:text-sm'
            type='text'
            placeholder='Search in Amazon ...'
          />
          <button className='bg-amazon_yellow hover:bg-amazon_yellow-dark rounded-r ml-auto p-1 md:p-2 transition-all duration-300'>
            <SearchIcon style={{ fontSize: "1.8rem" }} />
          </button>
        </form>
      </div>

      {/* Right side */}
      <div className='text-white hidden md:flex w-max mx-auto items-center justify-around mt-1 md:mt-0'>
        {/* Flag */}
        <div className='mr-3 py-2'>
          <img
            className='w-7 h-4'
            src='https://www.freepnglogos.com/uploads/indian-flag-png/indian-flag-flag-paint-face-photo-editing-0.png'
            alt='Flag'
          />
        </div>
        {/* Sign in */}
        <button className='flex flex-col text-sm leading-4 mr-3 p-2' onClick={!user ? () => loginWithRedirect() : () => logout()}>
          Hello, {user ? user.name : "User"} <span className='font-bold'>Sign {user ? "out" : "in"}</span>
        </button>
        {/* Orders */}
        <Link to='/orders' className='flex flex-col text-sm leading-4 mr-3 p-2'>
          Returns <span className='font-bold'>& Orders</span>
        </Link>
        {/* Shopping cart */}
        <Link to='/cart' className='py-2 mr-3 flex items-end font-bold p-2'>
          <div className='relative'>
            <span className='absolute -right-1 rounded-full flex items-center justify-center font-bold h-4 w-4 text-xs text-black bg-amazon_yellow-dark'>
              {basketItmes.length}
            </span>
            <ShoppingCartOutlinedIcon style={{ fontSize: "2.3rem" }} />
          </div>
          <p>Cart</p>
        </Link>
      </div>
    </div>
  );
}

export default NavbarTop;
