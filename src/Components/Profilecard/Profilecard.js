import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentMentor } from "../../redux/slices/data";
import "./profilecard.css";

const Profilecard = (props) => {
  const dispatch = useDispatch();
  const mentor = props.mentor;

  return (
    <div className="profile_card">
      <div className="profile_card_image_container">
        <img src={mentor.profileImg} alt="avatar" />
      </div>
      <div className="profile_card_info_container">
        <span>{mentor.name}</span>
        <span>{mentor.industry}</span>
        <button
          onClick={() => {
            dispatch(updateCurrentMentor(mentor));
          }}
        >
          Check Availablity
        </button>
      </div>
    </div>
  );
};

export default Profilecard;
