import { combineReducers } from "redux";
import { jobEditIdReducer } from "./jobEditId";
import { showFormReducer } from "./showForm";
import {
    singleJobNameRedcer,
  singleJobStartingTime,
  singleJobEndingTime,
  singleJobDetail,
  singleJobPriority,
} from "./singleJobreducer";

import {
    editJobNameRedcer,
    editJobStartingTime,
    editJobEndingTime,
    editJobDetail,
    editJobPriority,
} from "./editJobReducers";

import { jobsreducer } from './jobsreducers';



export const reducers = combineReducers({
  jobEditId: jobEditIdReducer,
  showForm: showFormReducer,
  singleJobName: singleJobNameRedcer,
  singleJobStartingTime,
  singleJobEndingTime,
  singleJobDetail,
  singleJobPriority,

  editJobName: editJobNameRedcer,
  editJobStartingTime,
  editJobEndingTime,
  editJobDetail,
  editJobPriority,

  jobs:jobsreducer
  
});
