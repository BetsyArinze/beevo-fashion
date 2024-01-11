import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import icons
import { FaArrowRight } from 'react-icons/fa';
// import components
import Product from '../components/Product';

const Shop = () => {
    // get product from product context
    const { products} = useContext(ProductContext);

    return (
    <div>
        <section className='py-16 mt-8'>
            <div className='container mx-auto'>
                <div className='text-center mb-9'>
                    <div className='grid grid-cols-1 md:grid-cols-2
                    lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
                    mx-auto md:max-w-none md:mx-0'>
                        {products.map((product) => {
                            return <Product product={product} key={product.id} />;
                        })}
                    </div>  
                </div> 
            </div>
        </section>
            
    </div>
)};

export default Shop;