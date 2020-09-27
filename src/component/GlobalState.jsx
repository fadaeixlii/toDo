import React,{useState} from 'react'
import AppContex from '../AppContex';
import {toast} from "react-toastify";
import { v4 as uuidv4 } from 'uuid'
const GlobalState = (props) => {

    const [jobs, setjobs] = useState(
        [
            { name: 'خواندن کتاب', startingTime: 10, endingTime: 12, priority: 3, itsDone: false, detail: 'خوتندن هر روز مقداری از یک کتاب', id: 1 },
            { name: 'یادگیری روزانه', startingTime: 13, endingTime: 16, priority: 2, itsDone: false, detail: 'یادگیری روزانه در مبحث  کامپیوتر', id: 2 },
            { name: 'انجام کار های خونه', startingTime: 8, endingTime: 10, priority: 1, itsDone: false, detail: 'کمک کردن در کار های خانه', id: 3 },
            { name: 'درس', startingTime: 18, endingTime: 20, priority: 4, itsDone: false, detail: 'انجام درس های لازم برای فردا', id: 4 },
        ]
    );
    // const [showJobs, setShowJobs] = useState(false);
    const [singleJobName, SetSingleJobName] = useState("");
    const [singleJobStartingTime, SetSingleJobStartingTime] = useState(0);
    const [singleJobEndingTime, SetSingleJobEndingTime] = useState(0);
    const [singleJobDetail, SetSingleJobDetail] = useState("");
    const [singleJobPriority, SetSingleJobPriority] = useState(3);




    const notify = () => toast.error('شخص با موفقیت حذف شد', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const notify2 = () => toast.info('کار جدید اضافه شد', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const handleAddJob = () => {
        let jobsTemp = [...jobs];
        let newjob = {
            name: singleJobName,
            startingTime: singleJobStartingTime,
            endingTime: singleJobEndingTime,
            priority: singleJobPriority,
            id: uuidv4(),
            detail: singleJobDetail,
            isDone: false
        };
        SetSingleJobPriority(1);
        SetSingleJobDetail('');
        SetSingleJobEndingTime(0);
        SetSingleJobName('');
        SetSingleJobStartingTime(0);
        jobsTemp.push(newjob);
        setjobs(jobsTemp);
        notify2();
    }

    const handleDeleteJob = (id) => {
        // debugger;
        let jobsTemp = [...jobs];
        let filterJob = jobsTemp.filter(p => p.id !== id);
        setjobs(filterJob);
        notify();

    }
    const addChangeName = (event) => {
        // SetSingleJobName("event.target.value");

        SetSingleJobName(event.target.value);
        // console.log(singleJobName);
    }

    const addChangeDetail = (event) => {
        SetSingleJobDetail(event.target.value);
    }

    const addChangeStartingTime = (event) => {
        SetSingleJobStartingTime(event.target.value);
    }

    const addChangeEndingTime = (event) => {
        SetSingleJobEndingTime(event.target.value);
    }
    const addChangePriority = (event) => {
        SetSingleJobPriority(event.target.value);
    }


    return (
        <AppContex.Provider
            value={{
                jobs: jobs,
                singleJobName: singleJobName,
                singleJobDetail: singleJobDetail,
                singleJobStartingTime: singleJobStartingTime,
                singleJobEndingTime: singleJobEndingTime,
                singleJobPriority, singleJobPriority,
                handleDeleteJob: handleDeleteJob,
                addChangeName: addChangeName,
                addChangeDetail: addChangeDetail,
                addChangeStartingTime: addChangeStartingTime,
                addChangeEndingTime: addChangeEndingTime,
                addChangePriority: addChangePriority,
                handleAddJob: handleAddJob
            }}
        >
            {props.children}
        </AppContex.Provider>
    );
}

export default GlobalState;