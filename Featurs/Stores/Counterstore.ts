import { configureStore } from '@reduxjs/toolkit'
import RootReducer from '../RootReducer'
// ...

const MyStore = configureStore({
  reducer: {
    reducer: RootReducer,
  }
});

export default MyStore;