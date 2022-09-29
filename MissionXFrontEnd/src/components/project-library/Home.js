import { useState,useEffect} from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../shared/Fallback'
import { errorHandler } from '../shared/ErrorHandler'
import LogIt from '../shared/LogIt'

import styles from "../styles/project-library/ProjectLibrary.module.css"
import FilterBar from "./FilterBar"
import Content from "./Content"

LogIt('Component Load', 'Project Library', 'Home')

console.log('Break here')

const { title,projectHome, pageTitle,intro } = styles;



function Home() {
  const [userSession, setUserSession] = useState({ id: "1", role: "teacher" }); // { id: "1", role: "teacher" } or { id: "1", role: "student" })

  //Pass by value lesson - below Content id={userSession.id} role={userSession.role} instead of Content userSession={userSession}

  console.log("Break here");

  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
      <div id={pageTitle}>
        <h className={title}>PROJECTS</h>
        <p className={intro}>
          Welcome to the project library. You can use the filter on the right to
          help you search for specific projects.
        </p>
      </div>
      <div id={projectHome}>
        <Content id={userSession.id} role={userSession.role} />
      </div>
    </ErrorBoundary>
  );
}

export default Home;