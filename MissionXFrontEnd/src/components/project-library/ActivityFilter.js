import FilterGroupChk from "../shared/FilterGroupChk";

/* Refactor - Query list from DB 

import useAxiosFetch from "../hooks/useAxioFetch";

    const user_session = { id: "1", role: "teacher" };
    const fetchUrl = `${process.env.REACT_APP_BASEURL}projects/filters`
        
    const { data, fetchError, isLoading } = useAxiosFetch(fetchUrl)

*/

export default function ActivityFilter(handleOnChange) {
  return (
    <FilterGroupChk
      heading="ACTIVITY TYPE"
      filters={["Animation", "Game", "Chabot", "Augmented Reality"]}
      updateSelect={handleOnChange}
    />
  );
}
