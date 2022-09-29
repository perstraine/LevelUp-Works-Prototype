import { Checkbox } from "@mui/material";
import axios from "axios";

import React, { useState } from "react";
import styles from "../styles/HelpRequests/HelpRequests.module.css";

export default function Request({
  profilePic,
  studentName,
  time,
  date,
  day,
  requestID,
  done,
}) {
  // Declaring selectRequest state variables
  const [selectRequest, setSelectRequest] = useState(false);

  // Funciton to update the request ID when a checkbox is clicked
  const updateRequestID = (e) => {
    let arrayIDs = [];
    setSelectRequest(e.target.checked);
    if (!selectRequest) {
      arrayIDs.push(requestID);
      console.log(arrayIDs);
    }
    axios
      .post("http://localhost:4000/api/students/help-requests/update", {
        request_id: arrayIDs,
      })
      .then((res) => {
        console.log(res);
      });
  };

  // Conditional renders all requests that if done has a value then it will not be shown
  return done !== null ? null : (
    <>
      <div className={styles.requestTotalContainer}>
        <Checkbox
          className={styles.checkbox}
          checked={selectRequest}
          onChange={updateRequestID}
        ></Checkbox>
        <div className={styles.requestContainer}>
          <div className={styles.studentRequest}>
            <div className={styles.requestContainerLeft}>
              <img
                src={profilePic}
                alt="placeholder"
                className={styles.profileImg}
              ></img>
              <h3 className={styles.studentName}>
                {studentName} needs help with their project.
              </h3>
            </div>
            <div className={styles.requestContainerRight}>
              <div className={styles.requestDate}>
                {day} {date}
              </div>
              <div className={styles.requestTime}>{time}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
