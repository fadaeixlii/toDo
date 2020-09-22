import React,{useState} from 'react';
import "./app.css";
import Jobs from './component/jobs/Jobs';
import './bootstrap-temp.css';
import AppContex from './AppContex';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [jobs,setjobs]=useState(
    [
      {name:'خواندن کتاب',startingTime:10,endingTime:12,priority:3,itsDone:false,detail:'خوتندن هر روز مقداری از یک کتاب',id:1},
      {name:'یادگیری روزانه',startingTime:13,endingTime:16,priority:2,itsDone:false,detail:'یادگیری روزانه در مبحث  کامپیوتر',id:2},
      {name:'انجام کار های خونه',startingTime:8,endingTime:10,priority:1,itsDone:false,detail:'کمک کردن در کار های خانه',id:3},
      {name:'درس',startingTime:18,endingTime:20,priority:4,itsDone:false,detail:'انجام درس های لازم برای فردا',id:4},
  ]
  );
  const [showJobs,setShowJobs]=useState(false);
  const [singleJob,setSingleJob]=useState(
    {name:'',startingTime:0,endingTime:0,priority:0,itsDone:false,detail:''}
  );

  const notify=()=>toast.error('شخص با موفقیت حذف شد', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const handleDeleteJob=(id)=>{
    debugger;
    let jobsTemp=[...jobs];
    let filterJob=jobsTemp.filter(p=>p.id !== id);
    setjobs(filterJob);
    notify();

  }
  return ( 
    <AppContex.Provider
    value={{ 
       jobs:jobs,
      singleJob:singleJob,
      handleDeleteJob:handleDeleteJob
    }}
    >

      <div className="container">
        <div className='wrapper'>
          <div className='app'>
            <Jobs jobs={jobs}/>
          </div>
          <div className='app'>

          </div>
        </div>
      </div>
      <ToastContainer/>
    </AppContex.Provider>
   );
}
 
export default App;