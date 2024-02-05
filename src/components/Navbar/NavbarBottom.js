// Redux
import { useDispatch } from "react-redux";
import { Activate } from "../../features/sidebar";
import Sidebar from "../Sidebar/Sidebar";
// MUI
import MenuIcon from "@mui/icons-material/Menu";

function NavbarBottom() {

  const dispatch = useDispatch();

  // JSX 
  return (
    <>
      <ul className='flex items-center py-1 pl-2 bg-amazon_blue text-white text-sm'>
        <li className='navbar_list_item'>
          <button className='font-semibold flex items-center' onClick={() => dispatch(Activate())}>
            <MenuIcon className='mr-1' />
          </button>
        </li>
        <li className='navbar_list_item'>Today's Deals</li>
        <li className='navbar_list_item'>Customer Service</li>
        <li className='navbar_list_item hidden md:block'>Registry</li>
        <li className='navbar_list_item hidden md:block'>Gist Cards</li>
        <li className='navbar_list_item hidden md:block'>Sell</li>
      </ul>

      {/* Sidebar */}
      <Sidebar />
    </>
  );
}

export default NavbarBottom;
