import {createContext} from 'react';
const AppContex=createContext({
    jobs:[],
    singleJobName:'',
    singleJobStartingTime:0,
    singleJobEndingTime:0,
    singleJobDetail:'',
    singleJobPriority:'',

    showForm:true,
    jobEditId:0,
    setShowForm:()=>{},
    setJobEditId:()=>{},

    editJobName:'',
    editJobDetail:'',
    editJobEndingTime:"00:00",
    editJobStartingTime:"00:00",
    editJobPriority:0,
    setEditJobName:()=>{},
    setEditJobPriority:()=>{},
    setEditJobDetail:()=>{},
    setEditJobEndingTime:()=>{},
    setEditJobStartingTime:()=>{},
    

    handleDeleteJob:()=>{},
    addChangeName:()=>{},
    addChangeDetail:()=>{},
    addChangeStartingTime:()=>{},
    addChangeEndingTime:()=>{},
    addChangePriority:()=>{},
    handleAddJob:()=>{},
    handleDoneJob:()=>{},

    handleEditName:()=>{},
    handleEditStartingTime:()=>{} ,
    handleEditEdingTime:()=>{} ,
    handleEditDetail:()=>{} ,
    handleEditPriority:()=>{} ,
    handleEditJob:()=>{} 

})
export default AppContex;