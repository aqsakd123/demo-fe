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
import taskChecklistStore from './taskChecklistStore/TaskChecklistStore'
import projectStore from './projectStore/ProjectStore'
import projectManagementStore from './projectManagementStore/ProjectManagementStore'
import codeCommonManagementStore from './codeCommonManagementStore/CodeCommonManagementStore'
import tagManagementStore from './tagManagementStore/TagManagementStore'
import codingFeatureStore from './codingFeatureStore/CodingFeatureStore'
import codingFileStore from './codingFileStore/CodingFileStore'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['userReducer', 'projectStore'],
}
const rootReducer = combineReducers({
  commonStore: commonStore.reducer,
  formBuilderStore: formBuilderStore.reducer,
  taskChecklistStore: taskChecklistStore.reducer,
  projectStore: projectStore.reducer,
  projectManagementStore: projectManagementStore.reducer,
  codeCommonManagementStore: codeCommonManagementStore.reducer,
  tagManagementStore: tagManagementStore.reducer,
  codingFeatureStore: codingFeatureStore.reducer,
  codingFileStore: codingFileStore.reducer,
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
