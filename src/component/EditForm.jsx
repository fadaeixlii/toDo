import React, { useContext } from 'react'
import AppContex from './../AppContex';
const EditForm = ({ id }) => {
    const context = useContext(AppContex);
    const editJob=context.jobs.findIndex(job=>job.id===id);
    debugger;
    const {name, startingTime, endingTime, priority, detail}=context.jobs[editJob];

    return (
        <div className="formContainer">


            <form method="get" action="" id="login-form"
                className="login-form" role="main"
                onSubmit={event => event.preventDefault()}
            >
                <h4 className="a11y">ویرایش</h4>
                <div>
                    <label className="label-email">
                        <input type="text" className="text" name="email"
                            placeholder={name} tabindex="1" required
                            onChange={context.handleEditName}
                            value={name}
                            autoComplete="off"
                        />
                        <span className="required">نام</span>
                    </label>
                </div>

                <div>
                    <label className="label-email">
                        <input type="time" className="text" name="email"
                            required
                            onChange={context.handleEditStartingTime}
                        />
                        <span className="required">{`ساعت شروع قبلی ${startingTime}`}</span>
                    </label>
                </div>

                <div>
                    <label className="label-email">
                        <input type="time" className="text" name="email"
                            required
                            onChange={context.handleEditEdingTime}
                        />

                        <span className="required">{`ساعت پایان قبلی ${endingTime}`}</span>
                    </label>
                </div>

                <div>
                    <label className="label-email">
                        <input type="range" id="vol" name="vol"
                            min="1" max="5" step="1"
                            onChange={context.handleEditPriority}
                            value={priority}
                        />

                        <span className="required">الویت</span>
                    </label>
                </div>


                <div>
                    <label className="label-password">
                        <input type="text" className="text" name="password"
                            placeholder="توضیحات" tabindex="2" required
                            onChange={context.handleEditDetail}
                            value={detail}
                            autoComplete="off"
                        />
                        <span className="required">توضیحات</span>
                    </label>
                </div>
                <input type="submit" value="Log In"
                    onClick={()=>context.handleEditJob(id)}
                />


            </form>
        </div>
    );
}

export default EditForm;