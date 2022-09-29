import LogIt from "../shared/LogIt";
import {useState} from 'react'

//refactor separate from DB fetch

export function FilterProject(props) {
  console.log("Break here");
  const { projectList, filtersObj } = props;
 
  const { course, subscription_id } = filtersObj;

  const subid = subscription_id + 1;
  
  const courseFilter = projectList.filter((item) => {   
    return item.course.toLowerCase() === course.toLowerCase();
  })
   
  const subscriptionFilter = courseFilter.filter((item) => {  
    return item.subscription_id === subid;
  })

  let filter = subscriptionFilter;
  
  const notZero = (num) => (num ? num : num);
  const show = notZero(filtersObj.displayNumber);

  console.log("How many projects ", filter.length);
  console.log("How many to show ", show);

  let pageList = filter;

  if (show > filter.length) {
    pageList = filter;
  } else {
    pageList = filter.splice(0, show);
  }

  return pageList;
  
}
