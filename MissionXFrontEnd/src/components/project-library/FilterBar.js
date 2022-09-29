import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../shared/Fallback'
import { errorHandler } from '../shared/ErrorHandler'
import LogIt from '../shared/LogIt'
import SubscriptionFilter from "./SubscriptionFilter";
import ActivityFilter from './ActivityFilter';
import YearRangeFilter from './YearRangeFilter';
import SubjectFilter from './SubjectFilter';


import styles from "../styles/project-library/ProjectLibrary.module.css"
const { filter } = styles

console.log("Break here");

function FilterBar(props) {

  const { groupEvent,subEvent } = props;

  LogIt('Component Load','FilterBar')  


    return (
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <div id={filter}>
          <SubscriptionFilter groupEvent={subEvent} />
          <ActivityFilter groupEvent={groupEvent} />
          <YearRangeFilter groupEvent={groupEvent} />
          <SubjectFilter groupEvent={groupEvent} />
        </div>
      </ErrorBoundary>
    );   
}

export default FilterBar;