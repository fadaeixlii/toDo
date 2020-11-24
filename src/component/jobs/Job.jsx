import React, { useEffect, usePrevious } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setShowForm } from "../../actions/showForm";
import { setJobEditId } from "./../../actions/jobEditId";
import {
  checkOtherJobOnEdit,
  handleDeletejob,
  handleDoneJob,
} from "./../../actions/jobs";
import {
  setJobDetailEdit,
  setJobStartingTimeEdit,
} from "../../actions/editJob";
import {
  setJobEndingTimeEdit,
  setJobNameEdit,
  setJobPriorityEdit,
} from "./../../actions/editJob";

const Job = ({
  name,
  startingTime,
  endingTime,
  priority,
  isDone,
  detail,
  id,
  edit,
}) => {
  const [disableCheckBtn, setDisableCheckBtn] = useState(false);
  const [jobContainerClass, setjobContainerClass] = useState("job");

  const dispatch = useDispatch();

  const editt = () => {
    dispatch(setShowForm(false));
    dispatch(setJobEditId(id));
    // this.setState({ jobContainerClass: "job job-select-edit" });
    dispatch(checkOtherJobOnEdit(id));
    dispatch(setJobStartingTimeEdit(startingTime));
    dispatch(setJobEndingTimeEdit(endingTime));
    dispatch(setJobNameEdit(name));
    dispatch(setJobPriorityEdit(priority));
    dispatch(setJobDetailEdit(detail));
  };

  const prevAmount = usePrevious({ edit });
  useEffect(() => {
    if (prevAmount.edit === false) {
      setjobContainerClass("job");

      // process here
    } else {
      setjobContainerClass("job  job-select-edit");
    }
  }, [edit]);

  let badgePriorityClasses = "badge badge-pill";
  if (priority === 1) badgePriorityClasses += " badge-secondary";
  else if (priority === 2) badgePriorityClasses += " badge-info";
  else if (priority === 3) badgePriorityClasses += " badge-primary";
  else if (priority === 4) badgePriorityClasses += " badge-warning";
  else if (priority === 5) badgePriorityClasses += " badge-danger";

  let isDoneBGC = "isDone";
  if (isDone === true) isDoneBGC += " bg-success";
  if (isDone === false) isDoneBGC += " bg-warning";

  return (
    <div className={jobContainerClass}>
      <div className={isDoneBGC}></div>
      <div className="job-info">
        <p>
          ساعت انجام:
          <br />
          {`${startingTime}-${endingTime}`}
        </p>
        <h5 about={detail}>
          {detail}
          {/* <div className="aboutforText">{detail}</div> */}
        </h5>
      </div>
      <div className="job-preview">
        <h6>وظیفه </h6>
        <h3>{name}</h3>
        <p>
          <span
            className={badgePriorityClasses}
          >{`الویت انجام ${priority}`}</span>
        </p>
        <button
          className="btn btn-outline-danger pill fa fa-trash btn-sm delete-btn"
          onClick={() => dispatch(handleDeletejob(id))}
        />
        <button
          className="btn btn-outline-success pill fa fa-check btn-sm check-btn"
          onClick={() => {
            dispatch(handleDoneJob(id));
            setDisableCheckBtn(!disableCheckBtn);
          }}
          disabled={disableCheckBtn}
        />
        <button
          className="btn btn-outline-primary pill fa fa-gear btn-sm gear-btn"
          onClick={editt}
        />
      </div>
    </div>
  );
};

export default Job;

Job.propTypes = {
  name: PropTypes.string,
  startingTime: PropTypes.number,
  endingTime: PropTypes.number,
  priority: PropTypes.number,
  isDone: PropTypes.bool,
  detail: PropTypes.string,
  id: PropTypes.number,
};
