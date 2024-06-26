import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ComparisonProduct {
  productId: string;
}

export interface ComparisonState {
  products: ComparisonProduct[];
}

const initialState: ComparisonState = {
  products: [],
};

export const comparisonSlice = createSlice({
  name: "comparison",
  initialState,
  reducers: {
    addComparisonProduct: (
      state,
      { payload: productId }: PayloadAction<string>,
    ) => {
      const existingProduct = state.products.find(
        (product) => product.productId === productId,
      );

      if (!existingProduct) {
        const newProduct: ComparisonProduct = {
          productId,
        };
        state.products.push(newProduct);
      }
    },
    removeComparisonProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.productId !== action.payload,
      );
    },
  },
});

const storedComparisonProducts = localStorage.getItem("comparisonProducts");
if (storedComparisonProducts) {
  initialState.products = JSON.parse(storedComparisonProducts);
}

export const { addComparisonProduct, removeComparisonProduct } =
  comparisonSlice.actions;

export default comparisonSlice.reducer;
