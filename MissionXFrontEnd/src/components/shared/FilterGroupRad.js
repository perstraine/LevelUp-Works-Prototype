import { useState } from "react";
import styles from "../styles/Filter-group.module.css"

const { filterList, filterSectionEnd, filterTitle } = styles;

const FilterGroupRad = ({ value, heading, filters, groupEvent }) => {
  //Default 1st button as clicked
  const [clickedId, setClickedId] = useState(0);
  const handleClick = (value, i) => {
    setClickedId(i);
    groupEvent(i);
  };

  console.log("Breakhere");

  return (
    <>
      <filterTitle className={filterTitle}>{heading}</filterTitle>
      <div className={filterList}>
        {filters.map((chk_name, i) => {
          return (
            <div key={i}>
              <input
                name={chk_name}
                type="checkbox"
                value={value}
                onClick={(event) => handleClick(value, i)}
                checked={i === clickedId ? true : false}
              />
              {chk_name}
            </div>
          );
        })}
      </div>
      <filterSectionEnd className={filterSectionEnd} />
    </>
  );
};
export default FilterGroupRad
