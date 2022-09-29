import { useState} from "react";
import Button from './Button'
import LogIt from '../shared/LogIt'



const ButtonGroup = (props) => {
  ////style is optional - refactor
  const { buttons, groupEvent, value, styles } = props;
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (id, lbl) => {
    if (id === clickedId) {
      // nothing
    } else {
      setClickedId(id);
      groupEvent(lbl);
      LogIt("debug", ` id ${id} buttongroup ${buttons}`);
    }
  };

  return buttons.map((lbl, i) => (
    <Button
      value={value}
      lbl={lbl}
      i={i}
      btnEvent={handleClick}
      state={clickedId}
    />
  ));
};
export default ButtonGroup