import LogIt from "../shared/LogIt";
import ButtonGroup from "../shared/ButtonGroup";
import styles from "../styles/project-library/ProjectLibrary.module.css";

const { pageProjects } = styles;

LogIt("debug", "Component Load", "Course Filter ");

console.log("Break here");

function CourseFilter({ handleGroupEvent }) {
  const value = "course_id";
  const btnGroup = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];

  return (
    <div id={pageProjects}>
      <ButtonGroup
        value={value}
        buttons={btnGroup}
        groupEvent={handleGroupEvent}
      />
    </div>
  );
}

export default CourseFilter;
