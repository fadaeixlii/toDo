import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editJobNameEdit,
  editJobStartingTimeEdit,
  editJobEndingTimeEdit,
  editJobPriorityEdit,
  editJobDetailEdit,
} from "./../actions/editJob";
import { handleEditJob } from "./../actions/jobs";
const EditForm = ({ id }) => {
  const editJobName = useSelector((state) => state.editJobName);
  const editJobStartingTime = useSelector((state) => state.editJobStartingTime);
  const editJobEndingTime = useSelector((state) => state.editJobEndingTime);
  const editJobDetail = useSelector((state) => state.editJobDetail);
  const editJobPriority = useSelector((state) => state.editJobPriority);
  const dispatch = useDispatch();

  return (
    <div className="formContainer">
      <form
        method="get"
        action=""
        id="login-form"
        className="login-form"
        role="main"
        onSubmit={(event) => event.preventDefault()}
      >
        <h4 className="a11y">ویرایش</h4>
        <div>
          <label className="label-email">
            <input
              type="text"
              className="text"
              name="email"
              placeholder={editJobName}
              tabindex="1"
              required
              onChange={(e) => dispatch(editJobNameEdit(e))}
              value={editJobName}
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
              required
              value={editJobStartingTime}
              onChange={(e) => {
                dispatch(editJobStartingTimeEdit(e));
              }}
            />
            <span className="required">{`ساعت شروع قبلی ${editJobStartingTime}`}</span>
          </label>
        </div>

        <div>
          <label className="label-email">
            <input
              type="time"
              className="text"
              name="email"
              required
              value={editJobEndingTime}
              onChange={(e) => {
                dispatch(editJobEndingTimeEdit(e));
              }}
            />

            <span className="required">{`ساعت پایان قبلی ${editJobEndingTime}`}</span>
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
              onChange={(e) => {
                dispatch(editJobPriorityEdit(e));
              }}
              value={editJobPriority}
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
              onChange={(e) => {
                dispatch(editJobDetailEdit(e));
              }}
              value={editJobDetail}
              autoComplete="off"
              rows="2"
            />
            <span className="required">توضیحات</span>
          </label>
        </div>
        <input
          type="submit"
          value="Log In"
          onClick={() => dispatch(handleEditJob(id))}
        />
      </form>
    </div>
  );
};

export default EditForm;
