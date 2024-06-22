import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProduct {
  quantity: number;
  productId: string;
}

export interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartProduct: (
      state,
      {
        payload: { productId, quantity = 1 },
      }: PayloadAction<{ productId: string; quantity?: number }>,
    ) => {
      const existingProduct = state.products.find(
        (product) => product.productId === productId,
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        const newProduct: CartProduct = {
          quantity,
          productId,
        };
        state.products.push(newProduct);
      }
    },
    removeCartProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.productId !== action.payload,
      );
    },
    increaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products.map((product: CartProduct) => {
        if (product.productId === action.payload) {
          product.quantity += 1;
        }
      });
    },
    decreaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products.map((product: CartProduct) => {
        if (product.productId === action.payload) {
          product.quantity -= 1;
        }
      });
    },
  },
});

const storedCartProducts = localStorage.getItem("cartProducts");
if (storedCartProducts) {
  initialState.products = JSON.parse(storedCartProducts);
}

export const {
  addCartProduct,
  removeCartProduct,
  increaseCartProductQuantity,
  decreaseCartProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
