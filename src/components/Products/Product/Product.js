import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import './Product.css'

const Product = ({ product, handelCart }) => {
    const { img, name, price, ratings, seller } = product

    return (
        <div className='w-60 border mx-6 mr-auto rounded-lg'>
            <img className='w-full mb-3 p-2 rounded-lg' src={img}></img>
            <div className=''>
                <div className='h-24 p-2'>
                    <h3 className='text-md font-medium'>{name}</h3>
                    <p>Price : ${price}</p>
                </div>
                <div className='pb-0 '>
                    <p className='px-2'>Manufacturer : {seller}</p>
                    <p className='px-2 mb-2'>Rating : {ratings}</p>
                    <button className='block btn border-none text-black hover:text-white w-full ' onClick={() => handelCart(product)}>Add to Cart<ShoppingCartIcon className='ml-2 h-5 w-6 inline'></ShoppingCartIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Product;