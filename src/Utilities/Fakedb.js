const addCart = id => {
    let shoppingCart;
    // get the shopping cart ekhane parse int kora hoyeche jate shopping cart gula k jate object akare pawa jay.....{'','' ,}
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    else {
        shoppingCart = {};
    }

    // add quantity shopping cat k [id] neya hoyeche jate key te shopping-cart e dekhay ar parseint korahoyeche jate jotogula bare ta sonkhay ase
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1
        shoppingCart[id] = newQuantity;



    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1)

    }
    // ekane stringify kora hoyeche karon value gula sring e thake tai prothome etake string e korte hoy
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))



}
const removeFromDb = id => {
    // ekhane prothom e dekhte hobe je shopping cart er moddhe ase ki eta dekhar por condition dite hoy
    const storedCart = localStorage.getItem('shopping-cart')
    // ekhane 2 ta jinish dekhte hobe etake object e nite hone JSON.paese diye pore shooping cart e ei id ta ase ki eta dekhte hoy tokhn abar local ta set kore dibo
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

        }
    }


}
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0)
    return total;
}
export {
    addCart, removeFromDb,
    deleteShoppingCart,
    getTotalPrice as getTotal
};