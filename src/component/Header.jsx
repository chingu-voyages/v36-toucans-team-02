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
                  ]}
                />
            </h1>

         </div>;
};

export default Header;
