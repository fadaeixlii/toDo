import React, { Component } from 'react'
import AppContex from './../../AppContex';
import PropTypes from 'prop-types';
class Job extends Component {
    state = {
        disableCheckBtn: false,
        jobContainerClass: "job",
    }
    constructor({ name, startingTime, endingTime, priority, isDone, detail, id, edit }) {
        super({ name, startingTime, endingTime, priority, isDone, detail, id, edit });
    }
    static contextType = AppContex;

    edit = () => {
        this.context.setShowForm(false);
        this.context.setJobEditId(this.props.id);
        // this.setState({ jobContainerClass: "job job-select-edit" });
        this.context.checkOtherJobOnEdit(this.props.id);
        this.context.setEditJobStartingTime(this.props.startingTime);
        this.context.setEditJobEndingTime(this.props.endingTime);
        this.context.setEditJobName(this.props.name);
        this.context.setEditJobPriority(this.props.priority);
        this.context.setEditJobDetail(this.props.detail);
    };

    componentWillReceiveProps(nextProps) {
        // debugger;
        if (nextProps.edit === false)
            this.setState({ jobContainerClass: "job" });
        else
            this.setState({ jobContainerClass: "job job-select-edit" });
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     debugger;
    //     if (nextProps.edit === false)
    //         this.setState({ jobContainerClass: "job" });
    //     else
    //         this.setState({ jobContainerClass: "job job-select-edit" });


    //     return true;
    // }

    render() {
        let badgePriorityClasses = "badge badge-pill";
        if (this.props.priority === 1) badgePriorityClasses += " badge-secondary";
        else if (this.props.priority === 2) badgePriorityClasses += " badge-info";
        else if (this.props.priority === 3) badgePriorityClasses += " badge-primary";
        else if (this.props.priority === 4) badgePriorityClasses += " badge-warning";
        else if (this.props.priority === 5) badgePriorityClasses += " badge-danger";

        let isDoneBGC = "isDone";
        if (this.props.isDone === true) isDoneBGC += " bg-success";
        if (this.props.isDone === false) isDoneBGC += " bg-warning";



        return (

            <div className={this.state.jobContainerClass}>
                <div className={isDoneBGC} ></div>
                <div className="job-info">

                    <p>ساعت انجام:<br />{`${this.props.startingTime}-${this.props.endingTime}`}</p>
                    <h5 about={this.props.detail}>{this.props.detail}
                        {/* <div className="aboutforText">{this.props.detail}</div> */}
                    </h5>
                </div>
                <div className="job-preview">
                    <h6>وظیفه </h6>
                    <h3>{this.props.name}</h3>
                    <p><span className={badgePriorityClasses}>{`الویت انجام ${this.props.priority}`}</span></p>
                    <button className="btn btn-outline-danger pill fa fa-trash btn-sm delete-btn"
                        onClick={() => this.context.handleDeleteJob(this.props.id)} />
                    <button className="btn btn-outline-success pill fa fa-check btn-sm check-btn"
                        onClick={() => {
                            this.context.handleDoneJob(this.props.id);
                            this.setState({ disableCheckBtn: !this.state.disableCheckBtn })
                        }} disabled={this.state.disableCheckBtn} />
                    <button className="btn btn-outline-primary pill fa fa-gear btn-sm gear-btn"
                        onClick={this.edit}
                    />
                </div>

            </div>

        );
    }
}
Job.propTypes = {
    name: PropTypes.string,
    startingTime: PropTypes.number,
    endingTime: PropTypes.number,
    priority: PropTypes.number,
    isDone: PropTypes.bool,
    detail: PropTypes.string,
    id: PropTypes.number
}

export default Job;