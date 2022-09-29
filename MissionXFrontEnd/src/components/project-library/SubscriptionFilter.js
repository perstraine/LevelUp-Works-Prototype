import FilterGroupRad from "../shared/FilterGroupRad";

/* Refactor - Query list from DB 

import useAxiosFetch from "../hooks/useAxioFetch";

    const user_session = { id: "1", role: "teacher" };
    const fetchUrl = `${process.env.REACT_APP_BASEURL}projects/filters`
        
    const { data, fetchError, isLoading } = useAxiosFetch(fetchUrl)

*/

export default function SubscriptionFilter({groupEvent}) {
    
    
    const value = "subscription_id";
    return (
      <FilterGroupRad
        value={value}
        heading="SUBSCRIPTION"
        filters={["Free", "Premium"]}
        groupEvent={groupEvent}
      />
    );

}


