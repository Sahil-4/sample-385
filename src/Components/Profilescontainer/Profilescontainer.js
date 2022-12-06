import React from "react";
import "./profilescontainer.css";
import Profilecard from "../Profilecard/Profilecard";
import { useSelector } from "react-redux";

const Profilescontainer = () => {
  const mentors = useSelector((state) => state.data.mentors);

  return (
    <div className="profiles_container">
      {mentors.length === 0 && <div>No mentors found</div>}
      {mentors.map((mentor) => {
        return <Profilecard key={mentor._id} mentor={mentor} />;
      })}
    </div>
  );
};

export default Profilescontainer;
