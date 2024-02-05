// React
import React from "react";
// MUI
import CopyrightIcon from "@mui/icons-material/Copyright";

function FooterBottom() {
  return (
    <div className='bg-amazon_blue-dark pt-20 pb-3'>
      <ul className='text-gray-300 max-w-screen-lg mx-auto text-xs px-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>
        <li className='footer_sm_items'>
          <p>Amazon Music</p>
          Stream millions of songs
        </li>
        <li className='footer_sm_items'>
          <p>Amazon Advertising</p>
          Find, attract, and engage customers
        </li>
        <li className='footer_sm_items'>
          <p>Amazon Drive</p>
          Cloud storage from Amazon
        </li>
        <li className='footer_sm_items'>
          <p>6pm</p>
          Score deals on fashion brands
        </li>
        <li className='footer_sm_items'>
          <p>AbeBooks</p>
          Books, art & collectibles
        </li>
        <li className='footer_sm_items'>
          <p>ACX</p>
          Audiobook Publishing Made Easy
        </li>
        <li className='footer_sm_items'>
          <p>Alexa</p>
          Actionable Analystics for the Web
        </li>
        <li className='footer_sm_items'>
          <p>Sell on Amazon</p>
          Start a Sekking Account
        </li>
        <li className='footer_sm_items'>
          <p>Amazon Business</p>
          Everything For Your Business
        </li>
        <li className='footer_sm_items'>
          <p>AmazonGlobal</p>
          Ship Orders Internationally
        </li>
        <li className='footer_sm_items'>
          <p>Home Services</p>
          Experienced Pros Happiness Guarantee
        </li>
        <li className='footer_sm_items'>
          <p>Amazon Ignite</p>
          Sell your original Digital Educational Resources
        </li>
        <li className='footer_sm_items'>
          <p>Amazon Web Services</p>
          Scalable Cloud Computing Services
        </li>
        <li className='footer_sm_items'>
          <p>Audible</p>
          Listen to Books & Original Audio Performances
        </li>
        <li className='footer_sm_items'>
          <p>Book Depository</p>
          Books With Free Delivery Worldwide
        </li>
        <li className='footer_sm_items'>
          <p>Box Office Mojo</p>
          Find Movie Box Office Data
        </li>
        <li className='footer_sm_items'>
          <p>ComiXology</p>
          Thousands of Digital Comics
        </li>
        <li className='footer_sm_items'>
          <p>DPReview</p>
          Digital Photography
        </li>
        <li className='footer_sm_items'>
          <p>East Dane</p>
          Designer Men's Fashion
        </li>
        <li className='footer_sm_items'>
          <p>Fabric</p>
          Sewing, Quilting & Knitting
        </li>
        <li className='footer_sm_items'>
          <p>Goodreads</p>
          Book reviews & recommendations
        </li>
        <li className='footer_sm_items'>
          <p>IMDb</p>
          Movies, TV & Celebrities
        </li>
        <li className='footer_sm_items'>
          <p>IMDbPro</p>
          Get Info Entertainment Professionals Need
        </li>
        <li className='footer_sm_items'>
          <p>Kindle Direct Publishing</p>
          Indie Digital & Print Publishing Made Easy
        </li>
        <li className='footer_sm_items'>
          <p>Prime Video Direct</p>
          Video Distribution Made Easy
        </li>
        <li className='footer_sm_items'>
          <p>Shopbop</p>
          Designer Fashion Brands
        </li>
        <li className='footer_sm_items'>
          <p>Woot!</p>
          Deals and Shenanigans
        </li>
        <li className='footer_sm_items'>
          <p>Zappos</p>
          Shoes & Clothing
        </li>
        <li className='footer_sm_items'>
          <p>Ring</p>
          Smart Home Security Systems
        </li>
        <li className='footer_sm_items'>
          <p>eero WiFi</p>
          Stream 4K Video in Every Room
        </li>
        <li className='footer_sm_items'>
          <p>Blink</p>
          Smart Security for Every Home
        </li>
        <li className='footer_sm_items'>
          <p>Neighbors App</p>
          Real-Time Crime & Safety Alerts
        </li>
        <li className='footer_sm_items'>
          <p>Amazon Subscription Boxes</p>
          Top subscription boxes – right to your door
        </li>
        <li className='footer_sm_items'>
          <p>PillPack</p>
          Pharmacy Simplified
        </li>
      </ul>

      {/* the privacy policy part */}
      <ul className='flex items-center justify-between w-11/12 md:w-8/12 lg:w-6/12 2xl:w-2/6 text-xs mx-auto mt-10'>
        <li>Conditions of Use</li>
        <li>Privacy Notice</li>
        <li>Interest-Based Ads</li>
        <li className='flex items-center' title='https://findyasinyunesi.vercel.app/'>
          <CopyrightIcon style={{ fontSize: "1.2rem" }} />
          <a href='https://findyasinyunesi.vercel.app/' target='_blank' rel='noreferrer'>
            2021 Yasin Yunesi
          </a>
        </li>
      </ul>
    </div>
  );
}

export default React.memo(FooterBottom);
