import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import cartReducer, {
  addCartProduct,
  removeCartProduct,
  increaseCartProductQuantity,
  decreaseCartProductQuantity,
  CartProduct,
} from "@/features/cart/cartSlice";
import comparisonReducer, {
  ComparisonProduct,
  addComparisonProduct,
  removeComparisonProduct,
} from "@/features/comparison/comparisonSlice";

const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  matcher: isAnyOf(
    addCartProduct,
    removeCartProduct,
    increaseCartProductQuantity,
    decreaseCartProductQuantity,
    addComparisonProduct,
    removeComparisonProduct,
  ),
  effect: (_, listenerApi) => {
    // @ts-expect-error: Just hide the warning
    const cartProducts = listenerApi.getState().cart.products as CartProduct[];
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    // @ts-expect-error: Just hide the warning
    const comparisonProducts = listenerApi.getState().comparison
      .products as ComparisonProduct[];
    localStorage.setItem(
      "comparisonProducts",
      JSON.stringify(comparisonProducts),
    );
  },
});

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    comparison: comparisonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
