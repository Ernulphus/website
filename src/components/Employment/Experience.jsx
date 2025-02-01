import {employment} from '../../constants';
import { Link } from 'react-router-dom';
import Card from '../Cards/Cards';

import './Experience.css';

function Experience () {
    
    const routes = employment.map((job) => (
        <Link to={job.href}>
            <Card>
                <h2>{job.name}</h2>
                {job.title && (<h3>{job.title}</h3>)}
                {job.dates && (<p>{job.dates}</p>)}
                {job.skills && (<div className='skills'>
                        Skills:
                        {job.skills.map((skill) => (
                            <div className='tag'>{skill}</div>
                        ))}
                    </div>)}
            </Card>
        </Link>
    ))

    return (
        <div className='cards-wrapper'>
            <div />
            <div>
                <h1>Work Experience</h1>
                {routes}
            </div>
            <div />
        </div>
    );
}

export default Experience;