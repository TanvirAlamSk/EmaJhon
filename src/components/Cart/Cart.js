import React, { useEffect, useState } from 'react';
import { getItems } from '../../fakedb/fakedb';

const Cart = ({ cartProduct, clearCart }) => {
    let totalItems = 0
    let totalPrice = 0
    let totalTax = 0
    let totalShipping = 0
    for (let item of cartProduct) {
        totalItems = totalItems + item.quantity
        totalPrice = parseInt(totalPrice + (item.price * item.quantity))
        totalTax = parseFloat(((totalPrice * 15) / 100).toFixed(2))
        totalShipping = totalShipping + item.shipping

    }

    return (
        <div className='w-1/2 md:w-1/3 lg:w-1/4 bg-orange-200 sticky top-0 h-screen'>
            <p className='my-12 text-xl font-semibold text-center'>Order Summary</p>
            <div className='ml-6'>
                <p className='mb-4'>Selected Items:{totalItems}</p>
                <p className='mb-4'>Total Price: {totalPrice}</p>
                <p className='mb-4'>Total Shipping Charge: {totalShipping}</p>
                <p className='mb-4'>Tax: {totalTax}</p>
                <p className='text-xl font-semibold my-5 mb-20'>Grand Total:{totalPrice + totalTax + totalShipping}</p>
            </div>
            <div className='px-5'>
                <button onClick={clearCart} className='btn mb-6 w-full rounded-md bg-red-500 border-none'>Clear Cart</button>
                <button className='btn w-full rounded-md bg-orange-500 border-none'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;