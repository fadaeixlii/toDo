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