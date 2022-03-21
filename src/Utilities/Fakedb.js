const addCart = id => {
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    else {
        shoppingCart = {};
    }

    // const quantity = localStorage.getItem('shopping-cart');
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)


    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1)

    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))



}
export { addCart };