import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';
// import cart context
import {CartContext} from '../contexts/CartContext'

const Product = ({product}) => {
    const {addToCart} = useContext(CartContext);
    // destructure product
    const { id, image, category, title, price } = product;
    console.log(product);
    return (
        <div>

        </div>
    );
};

export default Product;