import { useState } from "react";
import styles from "../styles/Button-group.module.css";


const ButtonGroup = ({buttons, doSomethingAfterClick }) => {

  //Default 1st button as clicked
  const [clickedId, setClickedId] = useState(0);
  const handleClick = (event, id) => {
    setClickedId(id);
    doSomethingAfterClick(event);
  };
  
  return (
    <> 
    {buttons.map((buttonLabel, i) => (
      <button
        key={i}
        name={buttonLabel}
        value={i}
        onClick={(event) => handleClick(event, i)}
        className={i === clickedId ? styles.active:styles.customButton}
       >{buttonLabel}</button>
      ))}
    </>
  );
};
export default ButtonGroup