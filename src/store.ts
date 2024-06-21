import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import cartReducer, {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  CartProduct,
} from "@/features/cart/cartSlice";

const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  matcher: isAnyOf(
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  ),
  effect: (_, listenerApi) => {
    // @ts-expect-error: Just hide the warning
    const cartProducts = listenerApi.getState().cart.products as CartProduct[];
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  },
});

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
