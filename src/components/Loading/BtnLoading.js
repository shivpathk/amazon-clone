// React
import React from "react";

function BtnLoading() {
  return (
    <div>
      <div className='btn_loading animate-sk_bouncedelay_1'></div>
      <div className='btn_loading animate-sk_bouncedelay_2'></div>
      <div className='btn_loading animate-sk_bouncedelay'></div>
    </div>
  );
}

export default React.memo(BtnLoading);
