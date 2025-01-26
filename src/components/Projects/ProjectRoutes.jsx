import {projects} from '../../constants';
import { Link } from 'react-router-dom';
import Card from '../Cards/Cards';

import './Projects.css';

function Projects () {
    
    const routes = projects.map((project) => (
        <Link to={project.href}>
            <Card>
                <h2>{project.name}</h2>
            </Card>
        </Link>
    ))
    return (
        <div className='cards-wrapper'>
            <div>
                {routes}
            </div>
        </div>
    );
}

export default Projects;