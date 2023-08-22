import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
const OrerProduct = ({ oderProduct, handelDelate }) => {
    const { id, name, quantity, img, price, shipping } = oderProduct

    return (
        <div className='w-3/4 flex justify-between items-center border-2 mb-5 p-1 rounded-lg '>
            <div className='flex '>
                <div className='mr-3'>
                    <img alt="" src={img} className='w-24 rounded-md'></img></div>
                <div className='text-left '>
                    <h3 className='font-semibold'>{name}</h3>
                    <p>Price : {price}</p>
                    <p>Quantity : {quantity}</p>
                    <p>Shipping Charge : {shipping}</p>
                </div>
            </div>
            <div>
                <button className='p-3 bg-red-300 rounded-full'
                    onClick={() => handelDelate(id)}><TrashIcon className="h-8 w-8 text-red-500 " /></button>
            </div>
        </div>
    );
};

export default OrerProduct;