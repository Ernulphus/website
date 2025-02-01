import {projects} from '../../constants';
import { Link } from 'react-router-dom';
import Card from '../Cards/Cards';

import './Projects.css';

function Projects () {
    

    const routes = projects.map((project) => (
        <Link to={project.href} target="_blank" rel="noopener noreferrer">
            <Card>
                <h2>{project.name}</h2>
                {project.desc && (<p>{project.desc}</p>)}
                {project.skills && 
                    (<div className='skills'>
                        Skills:
                        {project.skills.map((skill) => (
                            <div className='tag'>{skill}</div>
                        ))}
                    </div>)
                }
            </Card>
        </Link>
    ))

    return (
        <div className='cards-wrapper'>
            <div />
            <div>
                <h1>Projects</h1>
                {routes}
            </div>
            <div />
        </div>
    );
}

export default Projects;