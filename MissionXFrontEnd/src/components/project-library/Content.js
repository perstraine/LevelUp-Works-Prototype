import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../shared/Fallback";
import { errorHandler } from "../shared/ErrorHandler";
import { useEffect, useState } from "react";

import styles from "../styles/project-library/ProjectLibrary.module.css";

import LogIt from "../shared/LogIt";

import PageProjects from "./PageProjects";
import Projects from "./Projects";
import CourseFilter from "./CourseFilter";
import FilterBar from "./FilterBar";

const { contentHeader, contentProjects, content } = styles;

function Content(userSession) {
  LogIt("Component Load", "Content");

  //states for project refresh

  const [displayNumber, setDiplayNumber] = useState(5);

  const [recordIndex, setRecordIndex] = useState(0);

  const nextPage = () => {
    setRecordIndex(recordIndex + displayNumber);
  };

  const [course, setCourse] = useState("Beginner");
  const [subscription_id, setSubscription_id] = useState(0);
  const [activity_id,setActivity_id]=useState(0)


  const updateFilterBar = (props) => {
    const { value, id } = props;
    
    switch (value) { 
      case 'subscription_id':
        setSubscription_id(id)
        break;
      case 'activity_id':
        setActivity_id(id)
        break;
      default:
        LogIt('debug', 'Unrecognised filter ', value)
    }
   console.log('break here')
  };

  //more pass by value lessons    not this  course_id: { course_id },displayNumber: { displayNumber } -> Just this { displayNumber,course_id }
  const filtersObj = { displayNumber,course,subscription_id,activity_id}


  //filtered projects
  console.log("Break here");

  return (
    <>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <div id={content}>
          <div id={contentHeader}>
            <CourseFilter handleGroupEvent={setCourse} />
            <PageProjects handleGroupEvent={setDiplayNumber} />
          </div>
          <div id={contentProjects}>
            <FilterBar
              subEvent={setSubscription_id}
              groupEvent={updateFilterBar}
            />
            <Projects
              id={userSession.id}
              role={userSession.role}
              filtersObj={filtersObj}
            />
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
}

export default Content;
