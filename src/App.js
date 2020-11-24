import React from "react";

import Jobs from "./component/jobs/Jobs";
import FormAddJob from "./component/Form";
import EditForm from "./component/EditForm";
import MainLayout from "./component/layout/MainLayout";

// most be add these import to index.html
import "./app.css";
import "./bootstrap-temp.css";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const App = () => {
  const jobs = useSelector((state) => state.jobs);
  const EditId = useSelector((state) => state.jobEditId);
  const showForm = useSelector((state) => state.showForm);

  return (
    <MainLayout>
      <div className="app">
        {jobs.length > 0 ? (
          <Jobs />
        ) : (
          <div className="not-have-job">کاری برای انجام نیست دوست عزیز</div>
        )}
      </div>
      <div className="app">
        {showForm ? <FormAddJob /> : <EditForm id={EditId} />}
      </div>
    </MainLayout>
  );
};

export default App;
