import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import icons
import { FaArrowRight } from 'react-icons/fa';
// import components
import Product from '../components/Product';
import Hero from '../components/Hero'


const Home = () => {
    // get product from product context
    const { products} = useContext(ProductContext);

    const filteredProduct = products.filter((item) => {
        return (
            item.category === "men's clothing" || item.category === "women's clothing"
        )
    })

    const highrated = products.filter((item) => {
        return (
            item.rating.count > 300 && (item.category === "men's clothing" || item.category === "women's clothing")
        )
    })

    return (
    <div>
        <Hero />
        <section className='py-16'>
            <div className='container mx-auto'>
                <div className='mb-16'>
                    <div className='text-center mb-9'>
                        <h1 className='mb-3'>Best selling</h1>
                        <h2 className='mb-4'>Get in on the trend with our curated selection of best-selling styles.</h2>

                        {/* <div className='flex w-full h-full flex justify-center items-center gap-[40px] '> */}
                        {/* <div className='gap-[30px] w-[500px] mx-auto flex justify-center pt-0'> */}
                        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
                        mx-auto md:max-w-none md:mx-0'> */}
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm
                        mx-auto md:max-w-none md:mx-0'>
                            {highrated.map((product) => {
                                return <Product product={product} key={product.id} />;
                            })}
                        </div>
                    </div>
                    <div className='flex mx-auto justify-center'>
                        <button className="border-2 border-[#224F34] items-center p-3 text-red">
                            <Link to="../pages/shop"
                             className='flex items-center text-[#224F34]'>
                                See all
                                <FaArrowRight className="ml-3" />

                            </Link>
                        </button>
                    </div>
                </div>

                
            </div>
        </section>
        <section className='py-16'>
            <div className='container mx-auto'>
                <div className='text-center mb-9'>
                    <h1 className='mb-3'>Our product</h1>
                    <h2 className='mb-4'>Get in on the trend with our curated selection of best-selling styles.</h2>
                
                    <div className='grid grid-cols-1 md:grid-cols-2
                    lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
                    mx-auto md:max-w-none md:mx-0'>
                        {filteredProduct.map((product) => {
                            return <Product product={product} key={product.id} />;
                            // <div 
                            // className='w-full h-[300px] bg-pink-200 mb-4' 
                            // key={product.id}>
                            //   {product.title}
                            // </div>
                        
                        })}
                    </div>  
                </div> 
            </div>
        </section>
            
    </div>
)};

export default Home;
