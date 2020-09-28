import React, { useContext } from 'react';
import AppContex from './../AppContex';
import './../style/form.css';

const FormAddJob = () => {
    const context = useContext(AppContex);
    
    return (
        <div className="formContainer">


            <form method="get" action="j#" id="login-form"
                className="login-form" role="main"
                onSubmit={event => event.preventDefault()}
            >
                <h4 className="a11y">اضافه کردن کار جدید</h4>
                <div>
                    <label className="label-email">
                        <input type="text" className="text" name="email"
                            placeholder="نام کار" tabindex="1" required
                            onChange={context.addChangeName}
                            value={context.singleJobName}
                            autoComplete="off"
                        />
                        <span className="required">نام</span>
                    </label>
                </div>

                <div>
                    <label className="label-email">
                        <input type="time" className="text" name="email"
                            placeholder="ساعت شروع" tabindex="1" required
                            onChange={context.addChangeStartingTime}
                            value={context.singleJobStartingTime}
                            
                        />
                        <span className="required">ساعت شروع</span>
                    </label>
                </div>

                <div>
                    <label className="label-email">
                        <input type="time" className="text" name="email"
                            placeholder="ساعت پایان" tabindex="1" required
                            onChange={context.addChangeEndingTime}
                            value={context.singleJobEndingTime}
                        />
                       
                        <span className="required">ساعت پایان</span>
                    </label>
                </div>

                <div>
                    <label className="label-email">
                        <input type="range" id="vol" name="vol"
                            min="1" max="5" step="1"
                            onChange={context.addChangePriority}
                            value={context.singleJobPriority}
                        />

                        <span className="required">الویت</span>
                    </label>
                </div>


                <div>
                    <label className="label-password">
                        <input type="text" className="text" name="password"
                            placeholder="توضیحات" tabindex="2" required
                            onChange={context.addChangeDetail}
                            value={context.singleJobDetail}
                            autoComplete="off"
                        />
                        <span className="required">توضیحات</span>
                    </label>
                </div>
                <input type="submit" value="Log In"
                    onClick={context.handleAddJob}
                />


            </form>
        </div>
    );
}

export default FormAddJob;