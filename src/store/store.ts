import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { astroPictureApi } from '../query/AstroPictureQuery'

export const store = configureStore({
    reducer: {
        [astroPictureApi.reducerPath]: astroPictureApi.reducer,
    },

    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(astroPictureApi.middleware),
})

setupListeners(store.dispatch)