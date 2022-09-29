import { FilterProject } from "./FilterProject";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "../shared/Fallback";
import { errorHandler } from "../shared/ErrorHandler";
import Loading from "../shared/Loading";
import useAxiosFetch from "../hooks/useAxioFetch";

import splitString from "../shared/SplitString";
import styles from "../styles/project-library/ProjectLibrary.module.css";
import LogIt from "../shared/LogIt";

const { showProject, pic, projName, projProps, hovertext } = styles;

export default function Projects(props) {
  LogIt("Component Load", "Projects");
  console.log("break here");

  const { id, role, filtersObj } = props;

  // get Project once

  //{ id: "1", role: "student" }
  const fetchUrl = {
    url: `${process.env.REACT_APP_BASEURL}projects/${role}`,
    id: `${id}`,
  };

  const { allData, filteredData, fetchError, isLoading } =
    useAxiosFetch(fetchUrl);

  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
      <div id={styles.projects}>
        {isLoading && <Loading />}
        {fetchError && <FetchError error={fetchError} />}
        {allData && allData.length ? (
          <ShowProjects projectList={[...allData]} filtersObj={filtersObj} />
        ) : (
          ""
        )}
      </div>
    </ErrorBoundary>
  );
}

function FetchError(error) {
  return <div>Fetch error {error}</div>;
}

function ShowProjects(props) {
    console.log("Break here");
    const { projectList, filtersObj } = props;

  const pageList = FilterProject(props);

  return (
    <>
      {pageList.map((project) => {
        const { name, projectpic, course, activity, instructions } = project;
        const pname = splitString(name, "–"); //remove project ## -
        return (
          <div className={showProject}>
            <hovertext className={hovertext} data-hover={`${pname}`}>
              <img className={pic} src={projectpic} alt={pname} />
            </hovertext>
            <p className={`${projName}`}>{pname}</p>
            <p className={projProps}>
              {course.toUpperCase()} | {activity}
            </p>
          </div>
        );
      })}
    </>
  );
}
