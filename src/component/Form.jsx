import React from "react";
import { useSelector } from "react-redux";

import "./../style/form.css";
import { useDispatch } from "react-redux";
import {
  singleJobNameEdit,
  singleJobStartingTimeEdit,
  singleJobEndingTimeEdit,
  singleJobPriorityEdit,
  singleJobDetailEdit,
} from "./../actions/singleJob";
import { handleAddJob } from "./../actions/jobs";

const FormAddJob = () => {
  const singleJobName = useSelector((state) => state.singleJobName);
  const singleJobStartingTime = useSelector(
    (state) => state.singleJobStartingTime
  );
  const singleJobEndingTime = useSelector((state) => state.singleJobEndingTime);
  const singleJobDetail = useSelector((state) => state.singleJobDetail);
  const singleJobPriority = useSelector((state) => state.singleJobPriority);
  const dispatch = useDispatch();
  return (
    <div className="formContainer">
      <form
        method="get"
        action="j#"
        id="login-form"
        className="login-form"
        role="main"
        onSubmit={(event) => event.preventDefault()}
      >
        <h4 className="a11y">اضافه کردن کار جدید</h4>
        <div>
          <label className="label-email">
            <input
              type="text"
              className="text"
              name="email"
              placeholder="نام کار"
              tabindex="1"
              required
              onChange={(e) => dispatch(singleJobNameEdit(e))}
              value={singleJobName}
              autoComplete="off"
            />
            <span className="required">نام</span>
          </label>
        </div>

        <div>
          <label className="label-email">
            <input
              type="time"
              className="text"
              name="email"
              placeholder="ساعت شروع"
              tabindex="1"
              required
              onChange={(e) => dispatch(singleJobStartingTimeEdit(e))}
              value={singleJobStartingTime}
            />
            <span className="required">ساعت شروع</span>
          </label>
        </div>

        <div>
          <label className="label-email">
            <input
              type="time"
              className="text"
              name="email"
              placeholder="ساعت پایان"
              tabindex="1"
              required
              onChange={(e) => dispatch(singleJobEndingTimeEdit(e))}
              value={singleJobEndingTime}
            />

            <span className="required">ساعت پایان</span>
          </label>
        </div>

        <div>
          <label className="label-email">
            <input
              type="range"
              id="vol"
              name="vol"
              min="1"
              max="5"
              step="1"
              onChange={(e) => dispatch(singleJobPriorityEdit(e))}
              value={singleJobPriority}
            />

            <span className="required">الویت</span>
          </label>
        </div>

        <div>
          <label className="label-password">
            <textarea
              type="text"
              className="text"
              name="password"
              placeholder="توضیحات"
              tabindex="2"
              required
              onChange={(e) => dispatch(singleJobDetailEdit(e))}
              value={singleJobDetail}
              autoComplete="off"
            />
            <span className="required">توضیحات</span>
          </label>
        </div>
        <input
          type="submit"
          value="Log In"
          onClick={() => {
            dispatch(handleAddJob());
          }}
        />
      </form>
    </div>
  );
};

export default FormAddJob;
