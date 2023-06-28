import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    add: (draft, action) => {
      draft = draft.push(action.payload);
    },
  },
});

export default reducer;
export const { add } = actions;
