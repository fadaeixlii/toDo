import React, { Component } from 'react'
import AppContex from './../../AppContex';

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
                        <h2>{this.props.name}</h2>
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

export default Job;