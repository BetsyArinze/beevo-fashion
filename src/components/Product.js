import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { BsPlus, BsEyeFill} from 'react-icons/bs';
import {FaStar} from 'react-icons/fa';

// import cart context
import {CartContext} from '../contexts/CartContext'

const Product = ({product}) => {
    const {addToCart} = useContext(CartContext);
    // destructure product
    const { id, image, category, title, price, rating } = product;
    console.log(product);
    return (
        <div>
            <div className='border border-[#C2EFD4] h-[350px] mb-4
             overflow-hidden relative group transition'>
                <div className='w-full h-full flex justify-center items-center'>
                    {/* image */}
                    <div className='w-[200px] mx-auto flex
                    justify-center items-center'>
                        <img
                            className='max-h-[200px] group-hover:scale-110
                                transition duration-300'
                            src={image}
                            alt=''
                        />
                    </div>
                </div>
                {/* buttons */}
                <div className='absolute top-6 -right-11 group-hover:right-5
                p-2 flex flex-col items-center justify-center gap-y-1
                opacity-0 group-hover:opacity-100 transition-all
                duration-300'>
                    <button onClick={() => addToCart(product, id)}>
                        <div className='flex justify-center items-center
                        text-white w-12 h-12 bg-red-500'>
                            <BsPlus className='text-3xl' />
                        </div>
                    </button>
                    {/* <Link 
                        to={`/product/${id}`} 
                        className='w-12 h-12 bg-white flex justify-center
                        items-center text-primary drop-shadow-x1'>
                            <BsEyeFill />
                    </Link> */}
                </div>
            </div>
            {/* category and title and price */}
            <div className='p-2 items-center w-full'>
                <h3 className='mb-1 font-poppins font-semibold'>{title}</h3>
                <div className='flex mx-auto p-2 justify-between w-2/4 items-center font-medium'>
                    <div className='text-center'>$ {price} </div>
                    <div className='text-center'> | </div>
                    <div className='flex items-center justify-center'>
                        {rating.rate} <FaStar className="text-yellow-500 ml-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;