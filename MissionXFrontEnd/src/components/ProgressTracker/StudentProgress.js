import styles from "../styles/ProgressTracker/ProgressTracker.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../shared/Loading";
import CompletedProjects from "./CompletedProjects";
export default function StudentProgress() {
  // Declaring state variables
  const [progressList, setProgressList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fills the progressList state array with the api data
  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/api/students/progress",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        setProgressList(res.data);
      });
  }, []);

  // Checks the progressList object if retrieved data
  useEffect(() => {
    Object.keys(progressList).length === 0
      ? setIsLoading(true)
      : setIsLoading(false);
  }, [progressList]);

  // Conditional render loading component or help request, if the loading sate is true then
  // render loading else render Request component
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {progressList.map((val) => {
        const { Name, date_completed, project_id, student_id } = val;

        return (
          <div className={styles.progressContainer}>
            <div className={styles.progressContainerLeft}>
              <div className={styles.studentInfo}>
                <h2 className={styles.studentName}>{Name}</h2>
                <p className={styles.studentProgress}>
                  {val.Total}/15 Projects Completed
                </p>
              </div>
            </div>
            <CompletedProjects
              completed={date_completed}
              projectID={project_id}
              studentID={student_id}
            />
          </div>
        );
      })}
    </>
  );
}
