import React from 'react';

const OrderReviewItem = ({ orderData }) => {
    const { name, price, img, shipping } = orderData
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default OrderReviewItem;