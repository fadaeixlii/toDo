import React, { Component } from "react";
import { useSelector } from "react-redux";

import Job from "./Job";

const Jobs = () => {
    const jobs = useSelector(state => state.jobs)


  return (
    <div className="list-of-jobs">
      {jobs.map((job) => (
        <Job
          name={job.name}
          startingTime={job.startingTime}
          endingTime={job.endingTime}
          priority={job.priority}
          detail={job.detail}
          isDone={job.isDone}
          key={job.id}
          id={job.id}
          edit={job.edit}
        />
      ))}
    </div>
  );
};

export default Jobs;
