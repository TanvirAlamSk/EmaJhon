import React from 'react';
import { TrashIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Cart = ({ cartItem, handleClearCart }) => {
    // console.log(cartItem)
    let quantity = 0
    let price = 0;
    let shippingPrice = 0;
    for (const item of cartItem) {
        quantity = quantity + item.quantity
        price = price + (item.price * item.quantity)
        shippingPrice = shippingPrice + item.shipping
    }
    let tax = parseFloat(((price / 100) * 15).toFixed(2))
    let grandTotal = price + shippingPrice + tax


    return (
        <div className='sticky'>
            <p className='text-xl font-medium text-center mt-4 mb-10'>Order Summary</p>
            {/* <p className='text-md  text-left mb-6'>Selected Items: {cartItem.length}</p> */}
            <p className='text-md  text-left mb-6'>Selected Items: {quantity}</p>
            <p className='text-md  text-left mb-6'>Total Price: ${price}</p>
            <p className='text-md  text-left mb-6'>Total Shipping Charge: ${shippingPrice}</p>
            <p className='text-md  text-left mb-6'>Tax: {tax}</p>
            <p className='text-lg font-medium  text-left mb-6'>Grand Total: ${grandTotal}</p>
            <button className='bg-red-600 w-full py-3 rounded-md text-white mb-3' onClick={handleClearCart}>Clear Cart <TrashIcon className='ml-2 h-5 w-6 inline'></TrashIcon></button>

            <br></br>

            <Link to="/review-order"><button className='bg-yellow-500 w-full py-3 rounded-md text-white mb-96'>Review Order <ArrowRightIcon className='ml-2 h-5 w-6 inline font-bold'></ArrowRightIcon></button></Link>
        </div>
    );
};

export default Cart;