import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counter.slice';
import usernameSlice from './slices/username.slice';

export default configureStore({
  reducer: {
    // Aqui van las variables de la store
    counter: counterSlice,
    username: usernameSlice,
  },
});
