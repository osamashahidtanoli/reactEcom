import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        id: "01",
        name: "Product 1",
        img: "car-1",
        price: 1000,
        qty: 0
      },
      {
        id: "02",
        name: "Product 2",
        img: "car-2",
        price: 2000,
        qty: 0
      },
      {
        id: "03",
        name: "Product 3",
        img: "car-3",
        price: 4000,
        qty: 0
      },
    ],
    cart: []
  },
  reducers: {
    addToCart(state, action) {
        const id = action.payload.id;
        const qty = action.payload.qty;
        const numberQty = Number(qty);
        const findProduct = state.products.find(product => product.id === id);
        const cartFind = state.cart.find(cart => cart.id === id);
        if(!cartFind){
            state.cart.push({
               ...findProduct,
               qty: numberQty,
               price: findProduct.price * numberQty,
            });
        }
        else{
             cartFind.qty =  numberQty;
             cartFind.price = findProduct.price * cartFind.qty;
        }
      
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice;
