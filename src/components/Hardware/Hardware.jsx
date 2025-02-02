import {machines} from '../../constants';
import { Link } from 'react-router-dom';
import Card from '../Cards/Cards';

import './Hardware.css';

function Hardware () {
    
    const routes = machines.map((machine) => (
        <Link to={machine.href}>
            <Card>
                <h2>{machine.name}</h2>
                {machine.desc && (<p>{machine.desc}</p>)}
                {machine.img && (<img src={machine.img} />)}

            </Card>
        </Link>
    ))

    return (
        <div className='cards-wrapper'>
            <div />
            <div>
                <h1>Hardware</h1>
                {routes}
            </div>
            <div />
        </div>
    );
}

export default Hardware;