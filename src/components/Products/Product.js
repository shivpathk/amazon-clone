// Redux
import { useDispatch } from "react-redux";
import { addToBasket } from "../../features/basket";
// Toastify library
import { toast } from "react-toastify";
// MUI
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

function Product({ id, title, price, category, description, image, rating, i }) {

  const dispatch = useDispatch();

  // adding item to basket
  function addItemToBasket() {
    // adding item to redux store
    const product = { id, title, price, category, description, image, rating };
    dispatch(addToBasket(product));

    // notification
    toast.success("Product added to your Cart", {
      theme: "dark",
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  // JSX 
  return (
    <>
      <div
        className={`relative flex flex-col z-30 p-5 mx-4 my-5 bg-white rounded shadow-xl transition ease-linear hover:scale-105 duration-150 ${
          i === 4 && "md:col-span-2"
        }`}
      >
        <p className='absolute right-3.5 top-2.5 text-sm italic text-gray-400'>{category}</p>

        <img className='w-48 h-48 mx-auto object-contain mt-2' src={image} alt='Product' />

        <h1 className='mt-3 mb-1 font-bold'>{title}</h1>

        <div>
          {Array(Math.ceil(rating.rate))
            .fill()
            .map((_) => (
              <span key={Math.random() * 20}>
                <StarOutlinedIcon className='text-yellow-500' style={{ fontSize: "1.2rem" }} />
              </span>
            ))}
        </div>

        <p className='my-2 line-clamp-2 text-gray-800'>{description}</p>

        <h1 className='mt-5 mb-3 font-bold'>₹{price}</h1>

        <button
          className='mt-auto py-1 rounded bg-gradient-to-b transition-all duration-300 from-amber-100 to-amber-400 border border-amber-300 hover:opacity-80'
          onClick={addItemToBasket}
        >
          Add to Basket
        </button>
      </div>
      {/* Ad banner */}
      {i === 3 && (
        <div className='md:col-span-full my-6'>
          <img src='https://links.papareact.com/dyz' alt='Advertisment' />
        </div>
      )}
    </>
  );
}

export default Product;
