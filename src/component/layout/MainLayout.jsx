import React from 'react'
import { ToastContainer } from 'react-toastify';

const MainLayout = (props) => {
    return (
        <React.Fragment>

            <div className="container">
                <div className='wrapper'>
                    {props.children}

                    {/* <div className='app'>
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
                    </div> */}
                </div>
            </div>
            <ToastContainer />

        </React.Fragment>
    );
}

export default MainLayout;