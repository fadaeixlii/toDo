import {createContext} from 'react';
const AppContex=createContext({
    jobs:[],
    singleJob:{},
    handleDeleteJob:()=>{}

})
export default AppContex;