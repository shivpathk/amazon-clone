// React
import React from "react";
// Components
import FooterMain from "./FooterMain";

function Footer() {
  return (
    <div className='mt-5 bg-amazon_blue text-white'>
      {/* Back to top btn */}
      <button
        className='bg-amazon_blue-light transition-all duration-300 w-full py-3 hover:brightness-125 hover:opacity-80'
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Back to top
      </button>

      {/* Footer middle */}
      <FooterMain />
    </div>
  );
}

export default React.memo(Footer);
