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
export { addCart };