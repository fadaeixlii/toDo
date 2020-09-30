import React, { Component } from 'react';
import AppContex from '../../AppContex';
import Job from './Job';

class Jobs extends Component {
    static contextType=AppContex;
    
    
    render() { 
        return ( 
            <div className="list-of-jobs">
                {
                    this.context.jobs.map(job=>(
                        <Job name={job.name} startingTime={job.startingTime} 
                        endingTime={job.endingTime} priority={job.priority}
                        detail={job.detail} isDone={job.isDone} key={job.id} id={job.id}
                        edit={job.edit}
                        />
                    ))
                }
            </div>
         );
    }
}
 
export default Jobs;