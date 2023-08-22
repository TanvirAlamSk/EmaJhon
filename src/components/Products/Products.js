import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import Cart from '../Cart/Cart';
import { getItems, setItems } from '../../fakedb/fakedb';

const Products = () => {
    const [products, setProducts] = useState([])
    const [cartProduct, setCartProduct] = useState([])
    //

    useEffect(() => {
        fetch('products.json')
            .then((responce) => responce.json())
            .then((data) => setProducts(data))
    }, [])

    //
    useEffect(() => {
        let newcart = []
        const items = getItems()
        for (let id in items) {
            const remainItem = products.find(product => product.id == id)
            if (remainItem) {
                remainItem.quantity = items[id]
                newcart.push(remainItem)
            }
        }
        setCartProduct(newcart);
    }, [products])
    //
    const handelCart = (selectproduct) => {
        let cart = []
        const existing = cartProduct.find(product => product.id == selectproduct.id)
        if (!existing) {
            selectproduct.quantity = 1
            cart = [...cartProduct, selectproduct]
        } else {
            const restItem = cartProduct.filter(product => product.id !== selectproduct.id);
            existing.quantity = existing.quantity + 1
            cart = [...restItem, existing]

        }
        setCartProduct(cart)
        setItems(selectproduct)
    }


    const clearCart = () => {
        localStorage.clear()
        setCartProduct([])
    }

    return (
        <div className='flex mx-4 gap-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 ml-4 columns-4 w-1/2 md:2/3 lg:w-3/4 mr-2'>
                {
                    products.map((product) => <Product key={product.id} product={product}
                        handelCart={handelCart}></Product>)
                }
            </div>
            <Cart cartProduct={cartProduct} clearCart={clearCart}></Cart>
        </div>
    );
};

export default Products;