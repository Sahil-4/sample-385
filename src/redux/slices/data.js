import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../api/calls";

export const getData = createAsyncThunk("getData", async () => {
  // get data from api and return data
  const response = await fetchData();

  if (response.status === 200) {
    const data = await response.data.data;
    return data;
  }

  return null;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    isLoading: false,
    error: {
      isError: false,
      message: null,
    },
    data: null,
    mentors: [],
    mentor: null,
    searches: [],
  },

  reducers: {
    updateCurrentMentor: (state, action) => {
      state.mentor = action.payload;
    },

    updateSearchResults: (state, action) => {
      const { query, mentors } = action.payload;
      let arr = [];
      mentors.forEach((mentor) => {
        if (
          query !== "" &&
          (mentor.name.toLowerCase().includes(query.toLowerCase()) ||
            mentor._id === query)
        ) {
          arr.push(mentor);
        }
      });

      if (arr.length === 0) {
        alert("no results found");
      }

      state.searches = arr;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.isLoading = true;
      state.error = { isError: false, message: "" };
    });

    builder.addCase(getData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = { isError: true, message: "unknown error occurred" };
    });

    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.mentors = [...action.payload];
      state.isLoading = false;
      state.error = { isError: false, message: "" };
    });
  },
});

export const { updateCurrentMentor } = dataSlice.actions;
export const { updateSearchResults } = dataSlice.actions;
export default dataSlice.reducer;
