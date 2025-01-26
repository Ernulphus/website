import {projects} from '../../constants';
import { Link } from 'react-router-dom';

import './Projects.css';

function Projects () {
    
    const routes = projects.map((project) => (
        <h2><Link to={project.href}>{project.name}</Link></h2>
    ))
    return (
        <div className='cards-wrapper'>
            <div className='cards'>
                {routes}
            </div>
        </div>
    );
}

export default Projects;