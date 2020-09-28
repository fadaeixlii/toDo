import React,{useState} from 'react'
import AppContex from '../AppContex';
import {toast} from "react-toastify";
import { v4 as uuidv4 } from 'uuid'
const GlobalState = (props) => {

    const [jobs, setjobs] = useState(
        [
            { name: 'خواندن کتاب', startingTime: "10:00", endingTime: "12:00", priority: 3, isDone: false, detail: 'خوتندن هر روز مقداری از یک کتاب', id: 1 },
            { name: 'یادگیری روزانه', startingTime: "13:00", endingTime: "16:00", priority: 2, isDone: false, detail: 'یادگیری روزانه در مبحث  کامپیوتر', id: 2 },
            { name: 'انجام کار های خونه', startingTime: "8:00", endingTime: "10:00", priority: 1, isDone: false, detail: 'کمک کردن در کار های خانه', id: 3 },
            { name: 'درس', startingTime: "18:00", endingTime: "20:00", priority: 4, isDone: false, detail: 'انجام درس های لازم برای فردا', id: 4 },
        ]
    );
    // const [showJobs, setShowJobs] = useState(false);
    const [singleJobName, SetSingleJobName] = useState("");
    const [singleJobStartingTime, SetSingleJobStartingTime] = useState(0);
    const [singleJobEndingTime, SetSingleJobEndingTime] = useState(0);
    const [singleJobDetail, SetSingleJobDetail] = useState("");
    const [singleJobPriority, SetSingleJobPriority] = useState(3);

    const [editJobName, setEditJobName] = useState("");
    const [editJobStartingTime, setEditJobStartingTime] = useState(0);
    const [editJobEndingTime, setEditJobEndingTime] = useState(0);
    const [editJobDetail, setEditJobDetail] = useState("");
    const [editJobPriority, setEditJobPriority] = useState(3);


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
        SetSingleJobName(event.target.value);
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

    const handleDoneJob=(id)=>{
        let jobstemp=[...jobs];
        let index=jobstemp.findIndex(job=>job.id===id);
        jobstemp[index].isDone=true;
        setjobs(jobstemp);
    }

    const handleEditName=(event)=>{
        setEditJobName(event.target.value);
    }

    const handleEditStartingTime=(event)=>{
        setEditJobStartingTime(event.target.value);
    }
    
    const handleEditEdingTime=(event)=>{
        setEditJobEndingTime(event.target.value);
    }
    
    const handleEditDetail=(event)=>{
        setEditJobDetail(event.target.value);
    }

    
    const handleEditPriority=(event)=>{
        setEditJobPriority(event.target.value);
    }

    const handleEditJob = (id) => {
        let jobsTemp = [...jobs];
        let index=jobsTemp.findIndex(job=>job.id===id);

        jobsTemp[index].detail=editJobDetail;
        jobsTemp[index].name=editJobName;
        jobsTemp[index].startingTime=editJobStartingTime;
        jobsTemp[index].endingTime=editJobEndingTime;
        jobsTemp[index].priority=editJobPriority;


        setEditJobPriority(1);
        setEditJobDetail('');
        setEditJobEndingTime(0);
        setEditJobName('');
        setEditJobStartingTime(0);
        // jobsTemp.push(newjob);
        setjobs(jobsTemp);
        // notify2();
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
                handleAddJob: handleAddJob,
                handleDoneJob:handleDoneJob,
            
                handleEditName:handleEditName,
                handleEditStartingTime:handleEditStartingTime,
                handleEditEdingTime:handleEditEdingTime,
                handleEditDetail:handleEditDetail,
                handleEditPriority:handleEditPriority,
                handleEditJob:handleEditJob
            }}
        >
            {props.children}
        </AppContex.Provider>
    );
}

export default GlobalState;