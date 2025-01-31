import {education} from '../../constants';
import { Link } from 'react-router-dom';
import Card from '../Cards/Cards';

import './Education.css';

function Education () {
    

    const routes = education.map((school) => (
        <Link to={school.href}>
            <Card>
                <h2>{school.name}</h2>
                {school.degree && (<p>{school.degree}</p>)}
                {school.majors && (<p>{school.majors}</p>)}
                {school.minors && (<p>{school.minors}</p>)}
                {school.dates && (<p>{school.dates}</p>)}
                {school.gpa && (<p>GPA: {school.gpa}</p>)}
                {school.desc && (<p>{school.desc}</p>)}
            </Card>
        </Link>
    ))

    return (
        <div className='cards-wrapper'>
            <div />
            <div>
                <h1>Education</h1>
                {routes}
            </div>
            <div />
        </div>
    );
}

export default Education;