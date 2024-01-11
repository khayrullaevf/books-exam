import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

 // Replace with your actual API key



export const fetchData = createAsyncThunk("fetchData", async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});

const getDataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data: null,
    error: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default getDataSlice.reducer;
