// Using css modules to avoid conflicting names
import styles from "../../components/styles/student-profiles/StudentCard.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../shared/Loading";

export default function StudentCard() {
  // Declaring state variables
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fills the studentList state array with the api data
  useEffect(() => {
    axios
      .post("http://localhost:4000/api/students", {}, { withCredentials: true })
      .then((response) => {
        setStudentList(response.data);
      });
  }, []);

  // Checks the studentList object if retrieved data
  useEffect(() => {
    Object.keys(studentList).length === 0
      ? setIsLoading(true)
      : setIsLoading(false);
  }, [studentList]);

  // Conditional render loading component or help request, if the loading sate is true then
  // render loading else render Request component
  return isLoading ? (
    <Loading />
  ) : (
    <div className={styles.student_wrapper} id={styles.scroll}>
      {studentList.map((val) => {
        return (
          <div key={val.student_id} className={styles.student_item}>
            {
              <img
                src={val.profilepic}
                alt="placeholder"
                className={styles.profileImg}
              ></img>
            }
            {val.Name}
          </div>
        );
      })}
    </div>
  );
}
