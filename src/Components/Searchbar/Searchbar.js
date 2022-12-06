import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchResults } from "../../redux/slices/data";
import Results from "./Results";
import "./searchbar.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const mentors = useSelector((state) => state.data.mentors);

  const [query, setQuery] = useState("");

  return (
    <>
      <div className="center_h_self search_bar_container">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(updateSearchResults({ query: query, mentors: mentors }));
          }}
        >
          Search
        </button>
      </div>
      <Results />
    </>
  );
};

export default Searchbar;
