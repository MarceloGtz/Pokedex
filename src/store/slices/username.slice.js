import { createSlice } from '@reduxjs/toolkit';

export const usernameSlice = createSlice({
  // En name pondremos el nombre de la variable sin Slice: counter
  name: 'username',
  initialState: '',
  reducers: {
    getUsername: (state, action) => {
      return action.payload;
    },
  },
});

export const { getUsername } = usernameSlice.actions;

export default usernameSlice.reducer;
