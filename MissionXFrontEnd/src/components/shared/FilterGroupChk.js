import { useState } from "react";
import styles from "../styles/Filter-group.module.css"

const { filterList, filterSectionEnd, filterTitle } = styles;

export default function FilterGroupChk({ heading, filters, updateSelect}) {


    const defaultState = filters.map((state, index) => {
        return( (index === 0) ? true : false )
    });

    const [checkedState, setCheckedState] = useState(
        defaultState
    );


    
    const handleOnChange = (event) => {
        const updatedCheckedState = checkedState.map((checked, index) =>
            index === event.target.value ? !checked : checked
        );
        //FilterGroup checkboxes must have at least one item checked
        (updatedCheckedState.indexOf(true) ===-1)?setCheckedState(defaultState):setCheckedState(updatedCheckedState);
        console.log(`Chk select event`)
        updateSelect(event);
    }


    return (
      <>
        <filterTitle className={filterTitle}>{heading}</filterTitle>
        <div className={filterList}>
          {filters.map((chk_name, i) => {
            return (
              <div key={i}>
                <input
                  type="checkbox"
                  id={`sub-${i}`}
                  name={chk_name}
                  value={i}
                  checked={checkedState[i]}
                  onChange={(e) => handleOnChange(e)}
                />{" "}
                {chk_name}
              </div>
            );
          })}
        </div>
        <filterSectionEnd className={filterSectionEnd} />
      </>
    );
};
