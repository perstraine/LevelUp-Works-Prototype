import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../shared/Loading";
import Request from "./Request";

export default function StudentRequest() {
  // Declaring helpRequestList and isLoading state variables
  const [helpRequestList, setHelpRequestList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fills the helpRequestList state array with the api data
  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/api/students/help-requests",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        setHelpRequestList(res.data);
      });
  }, []);

  // Checks the helpRequestList object if retrieved data
  useEffect(() => {
    Object.keys(helpRequestList).length === 0
      ? setIsLoading(true)
      : setIsLoading(false);
  }, [helpRequestList]);

  // Conditional render loading component or help request, if the loading sate is true then
  // render loading else render Request component
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {helpRequestList.map((val) => {
        return (
          <Request
            profilePic={val.profilepic}
            studentName={val.Name}
            time={val.time}
            date={val.date}
            day={val.day}
            requestID={val.request_id}
            done={val.done}
          />
        );
      })}
    </>
  );
}
