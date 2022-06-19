import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        changeSearch: (state, action) => state = action.payload,
    }
});

export const selectSearch = state => state.search;
export const { changeSearch } = searchBarSlice.actions;
export default searchBarSlice.reducer;