import React from 'react';

const Footer = () => {
  return <footer className='bg-primary py-12'>
    <div className='container mx-auto'>
      <p className='text-center text-white'>
        Copyright &copy; Beevo Ecommerce Shop {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  </footer>;
};

export default Footer;
