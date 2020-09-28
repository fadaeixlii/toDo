import {createContext} from 'react';
const AppContex=createContext({
    jobs:[],
    singleJobName:'',
    singleJobStartingTime:0,
    singleJobEndingTime:0,
    singleJobDetail:'',
    singleJobPriority:'',
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