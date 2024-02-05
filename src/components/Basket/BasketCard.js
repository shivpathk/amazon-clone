// Redux
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../features/basket";
// MUI icon
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

function BasketCard({ title, price, category, description, image, rating, i }) {

  const product = { title, price, category, description, image, rating, i };

  const dispatch = useDispatch();

  // JSX 
  return (
    <div className='mb-16 flex px-2 md:px-4 lg:items-center'>
      {/* Product image */}
      <div className='w-44 md:w-32 lg:w-36 h-44 md:h-32 lg:h-36 flex items-center'>
        <img src={image} alt='Product' />
      </div>

      <div className='w-full flex items-start flex-col md:items-center md:flex-row'>
        {/* Title, desc and etc. */}
        <div className='w-full px-5 lg:px-14'>
          <h1 className='font-bold lg:text-lg'>{title}</h1>
          <p className='text-gray-400 text-sm mb-5 mt-1'>{category}</p>

          <div>
            {Array(Math.ceil(rating.rate))
              .fill()
              .map((_) => (
                <span key={Math.random() * 20}>
                  <StarOutlinedIcon className='text-yellow-500' style={{ fontSize: "1.2rem" }} />
                </span>
              ))}
          </div>

          <p className='my-2 line-clamp-2 text-gray-700'>{description}</p>

          <h1 className='mt-5 mb-3 font-bold'>$ {price}</h1>
        </div>

        {/* Buttons */}
        <div className='w-full md:w-max'>
          <button className='basket_btn' onClick={() => dispatch(addToBasket(product))}>
            Add to Basket
          </button>
          <button className='basket_btn' onClick={() => dispatch(removeFromBasket(product))}>
            Remove from Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketCard;
