import React from "react";
import { useSelector } from "react-redux";
import Profilecard from "../Profilecard/Profilecard";

const Results = () => {
  const results = useSelector((state) => state.data.searches);

  return (
    <div className="center_h_self search_results_container">
      {results.length !== 0 && <h1>Search results : {results.length}</h1>}
      <div className="profiles_container search_results">
        {results?.map((mentor) => {
          return <Profilecard key={mentor?._id} mentor={mentor} />;
        })}
      </div>
    </div>
  );
};

export default Results;
