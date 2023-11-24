import React, {createContext, useState} from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev)=>({
            ...prev, [itemId]:prev[itemId]+1
        }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({
            ...prev, [itemId]:prev[itemId]-1
        }))
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
    
        for (const itemId of Object.keys(cartItems)) {
            const quantity = cartItems[itemId];
            
            if (quantity > 0) {
                const itemInfo = all_product.find((product) => product.id === Number(itemId));
                totalAmount += itemInfo.new_price * quantity;
            }
        }
    
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItems = 0;

        for (const itemId of Object.keys(cartItems)) {
            const quantity = cartItems[itemId];
    
            if (quantity > 0) {
                totalItems += quantity;
            }
        }
        return totalItems;
    }
    

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;