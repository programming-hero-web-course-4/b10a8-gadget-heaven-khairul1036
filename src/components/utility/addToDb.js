
const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('product_id');
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

    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('product_id',storedListStr);
}

export {addToStoredCartList,getStoredCartList}
