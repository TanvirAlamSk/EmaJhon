
const setItems = (product) => {
    const shopingCart = getItems()
    let quantity = shopingCart[product.id]
    if (quantity) {
        shopingCart[product.id] = quantity + 1
    }
    else {
        shopingCart[product.id] = 1
    }
    const items = localStorage.setItem('shoping-Cart', JSON.stringify(shopingCart))

}
const getItems = () => {
    let shopingCart = {}
    const remain = localStorage.getItem('shoping-Cart')
    if (remain) {
        shopingCart = JSON.parse(remain)
    }
    return shopingCart
}

const deleteItems = (productId) => {
    const items = getItems()
    // console.log(items)
    for (const id in items) {
        if (productId == id) {
            delete items[id]
            localStorage.setItem("shoping-Cart", JSON.stringify(items))
        }
    }

}



export { getItems, setItems, deleteItems }