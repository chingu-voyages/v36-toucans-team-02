import React from 'react';
import Typical from 'react-typical'

const Header = () => {
  return <div id='page-1'>

            <h1 className='text-light text-center fs-4 pt-4'>
                <Typical
                  loop={Infinity}
                  steps={[
                      "Welcome to Our Voting App",
                      2000,
                      "With Host of Topics Created by Users",
                      2000,
                      "You can share your feelings with a vote",
                      2000,
                      "Only Registered Users can Vote",
                      2000, 
                  ]}
                />
            </h1>

         </div>;
};

export default Header;
