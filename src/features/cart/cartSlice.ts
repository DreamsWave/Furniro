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
    addProduct: (
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
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.productId !== action.payload,
      );
    },
    increaseProductQuantity: (state, action: PayloadAction<string>) => {
      state.products.map((product: CartProduct) => {
        if (product.productId === action.payload) {
          product.quantity += 1;
        }
      });
    },
    decreaseProductQuantity: (state, action: PayloadAction<string>) => {
      state.products.map((product: CartProduct) => {
        if (product.productId === action.payload) {
          product.quantity -= 1;
        }
      });
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
