import "./App.css";
import Navber from "./component/Navber/Navber";
import Products from "./component/Products/Products";
import OrderCard from "./component/OrderCard/OrderCard";
import { useState } from "react";


function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);
  const [grandTotal, setgrandTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const shopingCharge = 100;
  const handelProduct = (price) => {
    const newprice = totalPrice + price;
    setTotalPrice(newprice);
    const newSelectedItem = selectedItem + 1;
    setSelectedItem(parseInt(newSelectedItem));
    const newtax = ((newprice / 100) * 15);
    setTax(parseFloat(newtax).toFixed(2));
    setgrandTotal((newprice + newtax + shopingCharge).toFixed(2))
  };


  return (
    <div className="App">
      <Navber></Navber>
      <div className="show-product-price">
        <Products handelProduct={handelProduct}></Products>
        <OrderCard
          totalPrice={totalPrice}
          selectedItem={selectedItem}
          shopingCharge={shopingCharge}
          tax={tax}
          grandTotal={grandTotal}
        ></OrderCard>
      </div>
    </div>
  );
}

export default App;
