import { configureStore } from "@reduxjs/toolkit";

import fetchDataReducer from "../slice/fetchData";
import searchSlice from "../slice/searchSlice";

const store = configureStore({
  reducer: {
    data: fetchDataReducer,
    search:searchSlice,
  },
});

export default store;
