import { useEffect, useState } from "react";
import LogIt from "../shared/LogIt";

const useFilters = (filter) => {
  console.log("break here");

    const [filters, setFilters] = useState([filter]);
    const [isChanged, setIsChanged] = useState(false);
  
    const filterChangedHandler = () => {
    LogIt("debug", "Filter Changed ");
    };

  useEffect(() => {
    let isMounted = true;
      
      console.log('useFilter hook in action')

    const cleanUp = () => {
         isMounted = false;
         LogIt("useFilter unmounted ->");
    };

    return cleanUp;
  }, [isChanged]);

  

  return { filters, filterChangedHandler, isChanged, setIsChanged };

  // refactor
};

export default useFilters;
