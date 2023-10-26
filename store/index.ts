import {configureStore} from "@reduxjs/toolkit";
import  userSlice from '../slice/user'
import {productsAPI} from "@/app/api/test";

const store = configureStore({
  reducer: {
      user: userSlice,
      [productsAPI.reducerPath]: productsAPI.reducer,

  },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsAPI.middleware)
})

export type AppRoot = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store