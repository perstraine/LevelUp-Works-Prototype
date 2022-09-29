import FilterGroupChk from "../shared/FilterGroupChk";

/* Refactor - Query list from DB 

import useAxiosFetch from "../hooks/useAxioFetch";

    const user_session = { id: "1", role: "teacher" };
    const fetchUrl = `${process.env.REACT_APP_BASEURL}projects/filters`
        
    const { data, fetchError, isLoading } = useAxiosFetch(fetchUrl)

*/

export default function YearRangeFilter(handleOnChange) {
  return (
    <FilterGroupChk
      heading="YEAR LEVEL"
      filters={["1-4", "5-6", "7-8", "9-13"]}
      updateSelect={handleOnChange}
    />
  );
}
