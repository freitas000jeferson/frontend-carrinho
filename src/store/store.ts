import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productsReducer from './Products/Products.reducer'
import productCarStoreReducer from './ProductCarStore/ProductCarStore.reducer'

const rootReducer = combineReducers({
  products: productsReducer,
  productCarStore: productCarStoreReducer
})

const persistedReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer)

export const store = createStore(persistedReducer)
export const persisetdStore = persistStore(store)