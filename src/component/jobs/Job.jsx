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
        return (
            
                <div className="job">
                    <div className="job-preview">
                        <h6>وظیفه</h6>
                        <h3>{this.props.name}</h3>
                        <p>{`الویت انجام ${this.props.priority}`}</p>
                        <button className="btn btn-danger pill fa fa-trash btn-sm delete-btn"
                        onClick={()=>this.context.handleDeleteJob(this.props.id)} />

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