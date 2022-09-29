import ButtonGroup from '../shared/ButtonGroup'
import styles from '../styles/project-library/ProjectLibrary.module.css'
import LogIt from '../shared/LogIt'

const { pageProjects } = styles;

LogIt("Component Load", "Paging options");
console.log ('Break here')

function PageProjects({ handleGroupEvent }) {
    const value = 'displayNumber'
    const btnGroup = ["5", "10", "100"];
  return (
    <div id={pageProjects}>
      SHOW{" "}
      <ButtonGroup
        value={value}
        buttons={btnGroup}
        groupEvent={handleGroupEvent}
      />
    </div>
  );
}

export default PageProjects;