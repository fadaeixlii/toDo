import { v4 as uuidv4 } from "uuid";
import { notify2 } from "../utils/toasts";
import { notify } from "./../utils/toasts";
import {
  editJobDetailClean,
  editJobEndingTimeClean,
  editJobNameClean,
  editJobPriorityClean,
  editJobStartingTimeClean,
} from "./editJob";
import { showForm } from './showForm';
import {
  singleJobEndingTimeClean,
  singleJobNameClean,
  singleJobStartingTimeClean,
  singleJobDetailClean,
  singleJobPriorityClean,
} from "./singleJob";

const resetSingleJob = () => {
  return async (dispatch) => {
    await dispatch(singleJobNameClean());
    await dispatch(singleJobStartingTimeClean());
    await dispatch(singleJobEndingTimeClean());
    await dispatch(singleJobDetailClean());
    await dispatch(singleJobPriorityClean());
  };
};

const resetEditJob = () => {
  return async (dispatch) => {
    await dispatch(editJobNameClean());
    await dispatch(editJobStartingTimeClean());
    await dispatch(editJobEndingTimeClean());
    await dispatch(editJobDetailClean());
    await dispatch(editJobPriorityClean());
  };
};

export const handleAddJob = () => {
  return async (dispatch, getState) => {
    let jobsTemp = [...getState().jobs];
    let newjob = {
      name: getState().singleJobName,
      startingTime: getState().singleJobStartingTime,
      endingTime: getState().singleJobEndingTime,
      priority: getState().singleJobPriority,
      id: uuidv4(),
      detail: getState().singleJobDetail,
      isDone: false,
      edit: false,
    };
    resetSingleJob();
    jobsTemp.push(newjob);
    await dispatch({ type: "ADD_JOB", payload: jobsTemp });
    notify2();
  };
};

export const handleDeletejob = (id) => {
  return async (dispatch, getState) => {
    let jobsTemp = [...getState().jobs];
    let filterJob = jobsTemp.filter((p) => p.id !== id);
    await dispatch({ type: "DELETE_JOB", payload: filterJob });
    notify();
  };
};

export const handleDoneJob = (id) => {
  return async (dispatch, getState) => {
    let jobstemp = [...getState().jobs];
    let index = jobstemp.findIndex((job) => job.id === id);
    jobstemp[index].isDone = true;
    await dispatch({ type: "DONE_JOB", payload: jobstemp });
  };
};

export const handleEditJob = (id) => {
  return async (dispatch, getState) => {
    let jobsTemp = [...getState().jobs];
    let index = jobsTemp.findIndex((job) => job.id === id);

    jobsTemp[index].detail = getState().editJobDetail;
    jobsTemp[index].name = getState().editJobName;
    jobsTemp[index].startingTime = getState().editJobStartingTime;
    jobsTemp[index].endingTime = getState().editJobEndingTime;
    jobsTemp[index].priority = getState().editJobPriority;
    resetEditJob();
    await dispatch({type:"EDIT_JOB",payload:jobsTemp});
    await dispatch(showForm());
  };
};

export const checkOtherJobOnEdit=(id)=>{
    return async (dispatch,getState)=>{
        let jobsTemp = [...getState().jobs];
        let index=jobsTemp.findIndex(job=>job.id===id);
        jobsTemp.forEach(job=>{
            if(job.edit===true)
                job.edit=false;
        });
        
        jobsTemp[index].edit=true;
        await dispatch({type:"CHECK_OTHER_JOB_EDIT",payload:jobsTemp});
    }
}
