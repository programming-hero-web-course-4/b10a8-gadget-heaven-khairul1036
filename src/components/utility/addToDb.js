
const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if(storedList.includes(id)){
        return;
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list',storedListStr);
    }
}

const updateCartList = (cartList) => {
    localStorage.setItem('cart-list', JSON.stringify(cartList));
};

const clearCart = () => {
    localStorage.setItem('cart-list', JSON.stringify([]));
}

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();

    if(storedWishList.includes(id)){
        return;
    }
    else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}

const updateWishList = (wishList) => {
    localStorage.setItem('wish-list', JSON.stringify(wishList));
};

export {addToStoredCartList,getStoredCartList,updateCartList,clearCart,getStoredWishList,addToStoredWishList,updateWishList}
