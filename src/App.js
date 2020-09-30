import React, {  useContext } from 'react';
import AppContex from './AppContex';
import Jobs from './component/jobs/Jobs';
import FormAddJob from './component/Form';
import EditForm from './component/EditForm';
import MainLayout from './component/layout/MainLayout';


// most be add these import to index.html
import "./app.css";
import './bootstrap-temp.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const context = useContext(AppContex);
  return (

    <MainLayout>
      <div className='app'>
        {
          context.jobs.length > 0 ? (
            <Jobs jobs={context.jobs} />
          ) : (
              <div className="not-have-job">
                کاری برای انجام نیست دوست عزیز
              </div>
            )
        }

      </div>
      <div className='app'>
        {
          context.showForm ? (<FormAddJob />) : (
            <EditForm id={context.jobEditId} />
          )
        }
      </div>
    </MainLayout>
  );
}

export default App;