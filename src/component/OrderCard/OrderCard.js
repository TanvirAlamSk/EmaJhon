import React from "react";
import "./OrderCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolid, faTrash } from '@fortawesome/free-solid-svg-icons'
const OrderCard = ({
  totalPrice,
  selectedItem,
  shopingCharge,
  tax,
  grandTotal,
}) => {
  return (
    <div className="order-card">
      <h2 className="title">Order Summary</h2>
      <div className="curt-summary">
        <h3>Selected Item : {selectedItem}</h3>
        <h3>Total Price: ${totalPrice} </h3>
        <h3>Total Shipping Charge: ${shopingCharge} </h3>
        <h3>Tax: ${tax}</h3>
        <h3>Grand Total: ${grandTotal}</h3>
        <button className="clear-btn">Clear Cart <FontAwesomeIcon icon="faSolid faTrash" /> </button>
        <button>Review Order</button>
      </div>
    </div>
  );
};

export default OrderCard;
