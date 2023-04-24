import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderReviewItem from './OrderReviewItem/OrderReviewItem';

const OrderReview = () => {
    const products = useLoaderData()
    const localdata = JSON.parse(localStorage.getItem('shopping-cart'))
    const ordersData = []
    for (const id in localdata) {
        const remain = products.find(product => product.id == id)
        ordersData.push(remain)
    }
    console.log(ordersData)

    return (
        <div>
            <p>Order review</p>
            <div>
                {ordersData.map(orderData => <OrderReviewItem key={orderData.id} orderData={orderData}></OrderReviewItem>)}
            </div>
        </div>
    );
};

export default OrderReview;