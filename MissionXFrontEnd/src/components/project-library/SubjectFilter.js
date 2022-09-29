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
      heading="SUBJECT MATTER"
      filters={[
        "Computer Science",
        "Maths",
        "Science",
        "Language",
        "Art",
        "Music",
      ]}
      updateSelect={handleOnChange}
    />
  );
}
