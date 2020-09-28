import React, { Component } from 'react'
import AppContex from './../../AppContex';
import PropTypes from 'prop-types';
class Job extends Component {
    state = {}
    constructor({ name, startingTime, endingTime, priority, isDone, detail ,id}) {
        super({ name, startingTime, endingTime, priority, isDone, detail,id });
    }
    static contextType=AppContex;

  
    render() {
        let badgePriorityClasses="badge badge-pill";
        if(this.props.priority===1) badgePriorityClasses+=" badge-secondary";
        else  if(this.props.priority===2) badgePriorityClasses+=" badge-info";
        else  if(this.props.priority===3) badgePriorityClasses+=" badge-primary";
        else  if(this.props.priority===4) badgePriorityClasses+=" badge-warning";
        else  if(this.props.priority===5) badgePriorityClasses+=" badge-danger";
        
        let isDoneBGC="isDone";
        if(this.props.isDone===true) isDoneBGC+=" bg-success";
        if(this.props.isDone===false) isDoneBGC+=" bg-warning";
        


        return (
            
                <div className="job">
                    <div className={isDoneBGC} ></div>
                    <div className="job-preview">
                        <h6>وظیفه </h6>
                        <h3>{this.props.name}</h3>
                        <p><span className={badgePriorityClasses}>{`الویت انجام ${this.props.priority}`}</span></p>
                        <button className="btn btn-outline-danger pill fa fa-trash btn-sm delete-btn"
                        onClick={()=>this.context.handleDeleteJob(this.props.id)} />
                        <button className="btn btn-outline-success pill fa fa-check btn-sm check-btn"
                        onClick={()=>this.context.handleDoneJob(this.props.id)}   />

                    </div>
                    <div className="job-info">
                        
                        <p>{`ساعت انجام از ساعت ${this.props.startingTime} تا ساعت ${this.props.endingTime}`}</p>
                        <h5>{this.props.detail}</h5>
                    </div>
                </div>
            
        );
    }
}
Job.propTypes={
    name:PropTypes.string,
    startingTime:PropTypes.number,
    endingTime:PropTypes.number,
    priority:PropTypes.number,
    isDone:PropTypes.bool,
    detail:PropTypes.string,
    id:PropTypes.number
}

export default Job;