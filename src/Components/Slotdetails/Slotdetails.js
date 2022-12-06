import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentMentor } from "../../redux/slices/data";
import "./slotdetails.css";

const Slotdetails = () => {
  const dispatch = useDispatch();
  const slotDetails = useSelector((state) => state.data.mentor?.slotDetails);

  return (
    <div
      className={`center_h_self mentor_slot_details ${
        slotDetails?.availability ? "" : "hidden"
      }`}
    >
      <div className="close_button_container">
        <button
          onClick={() => {
            dispatch(updateCurrentMentor(null));
          }}
        >
          Close
        </button>
      </div>

      <div className="id_container">
        <span>User Id : </span>
        <input type="text" disabled value={slotDetails?.userId || ""} />
        <button
          onClick={() => {
            window.navigator.clipboard = slotDetails?.userId;
          }}
        >
          Copy
        </button>
      </div>

      <div className="center_h_self mentor_availablity">
        {slotDetails?.availability &&
          Object.keys(slotDetails?.availability).map((day, index) => {
            return (
              <div key={index} className="day">
                <p>{day}</p>
                {slotDetails?.availability[day].map((timings, index) => {
                  return (
                    <div className="timing" key={index}>
                      {timings.startTime} {timings.endTime}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Slotdetails;
