function OrderItem({ order }) {
  return (
    <div className='mt-5 bg-gray-50 pb-12 rounded-md border border-gray-200 font-bold text-gray-400 transition-all duration-500 hover:border-gray-300'>
      {/* Top info */}
      <div className='lg:flex items-center justify-between bg-gray-100 px-5 py-3 rounded-md'>
        <div className='md:grid grid-cols-2 text-sm mb-3 lg:mb-0'>
          <h1 className='mb-3 md:mb-0'>
            <span className='font-bold text-gray-500'>ORDER PLACED</span> <br /> {order[2].slice(5, 16)}
          </h1>
          <h1>
            <span className='font-bold text-gray-500'>TOTAL</span> <br /> ₹{order[3]} - Next Day Delivery
          </h1>
        </div>

        <div className='lg:text-right'>
          <p className='text-sm'>
            <span className='text-gray-500 lg:hidden'>ORDER ID</span> <br className='lg:hidden' />
            <span className='hidden lg:inline-block'>ORDER</span> # {order[1]}
            {order[1]}
          </p>
          <h1 className='text-xl mt-5 text-sky-600'>{order[0].length} items</h1>
        </div>
      </div>

      {/* Images of products */}
      <div className='mt-10 px-5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6'>
        {order[0].map(({ image }) => {
          return <img className='w-28 md:w-32 lg:w-36 h-28 md:h-32 lg:h-36 object-contain mb-5' src={image} alt='Product' />;
        })}
      </div>
    </div>
  );
}

export default OrderItem;
