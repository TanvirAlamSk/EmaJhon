import React, { useEffect, useState } from 'react';
import { deleteItems, getItems } from '../../fakedb/fakedb';
import { useLoaderData } from 'react-router-dom';
import OrerProduct from './OderProduct/OrerProduct';
import Cart from '../Cart/Cart';

const Order = () => {
    const [cartProduct, setCartProduct] = useState([])
    const products = useLoaderData();
    const orderItems = getItems()

    useEffect(() => {
        let purchase = []
        for (let id in orderItems) {
            const orders = products.find(product => product.id == id)
            orders.quantity = orderItems[id]
            purchase.push(orders)
        }
        setCartProduct(purchase)
    }, [])

    const clearCart = () => {
        localStorage.clear()
        setCartProduct([])
    }
    // const handeldeleteItems = (productId) => {
    //     const items = getItems()
    //     for (const id in items) {
    //         if (productId == id) {
    //             delete items[id]
    //         }
    //     }
    // }
    const handelDelate = (id) => {
        // const rest1 = getItems()
        // console.log(rest1)
        deleteItems(id)
        // const afterDeleteItems = getItems()
        const rest = cartProduct.filter(cartoneProduct => cartoneProduct.id !== id)
        setCartProduct(rest)

    }
    return (
        <div className='flex grid-cols-2 mx-4 gap-10'>
            <div className='w-3/4  mt-28 ml-20'>{
                cartProduct.length == 0 ?
                    <h2 className='text-center'>Please Select any Items </h2>
                    :
                    cartProduct.map((oderProduct, i) => <OrerProduct key={i} oderProduct={oderProduct} handelDelate={handelDelate}></OrerProduct>)
            }</div>

            <Cart cartProduct={cartProduct} clearCart={clearCart}

            ></Cart>

        </div>
    );
};

export default Order;