import React, { Fragment,useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import AppContex from './AppContex';
import Jobs from './component/jobs/Jobs';
import FormAddJob from './component/Form';
import "./app.css";
import './bootstrap-temp.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const context=useContext(AppContex);
  return (

    <Fragment>

      <div className="container">
        <div className='wrapper'>
          <div className='app'>
            <Jobs jobs={context.jobs} />
          </div>
          <div className='app'>
            <FormAddJob />
          </div>
        </div>
      </div>
      <ToastContainer />

    </Fragment>
  );
}

export default App;