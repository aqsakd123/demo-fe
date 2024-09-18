import storage from 'redux-persist/lib/storage'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import commonStore from './commonStore/CommonStore'
import formBuilderStore from './formBuilderPageStore/FormBuilderStore'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['userReducer', 'commonStore'],
}
const rootReducer = combineReducers({
  commonStore: commonStore.reducer,
  formBuilderStore: formBuilderStore.reducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export { store, persistor, rootReducer }
