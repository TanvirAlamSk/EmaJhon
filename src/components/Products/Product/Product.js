import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Product = ({ product, handelCart }) => {
    const { img, name, price, seller, ratings } = product
    return (
        <div className='w-76 border-2  rounded-md '>
            <div className='text-left mb- m-1'>
                <img src={img} alt='' className='w-full rounded-sm'></img>
                <p className='text-lg mt-5 font-semibold h-20 lg:h-12'>{name}</p>
                <p className='mt-2'>Price : {price}</p>
            </div>
            <div className='text-left '>
                <p className='m-1'>Manufacturer :{seller}</p>
                <p className='m-1 mb-3'>Rating : {ratings}</p>
                <button onClick={() => handelCart(product)} className='btn w-full rounded-md bg-orange-200 hover:bg-orange-600 text-black border-none'>Add to Cart <span>
                    <ShoppingCartIcon className="h-6 w-6 text-black ml-2" />
                </span>
                </button>
            </div>

        </div>
    );
};

export default Product;