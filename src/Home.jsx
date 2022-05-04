import { useState } from 'react';
import List from './List';

const Home = () => {
    
    const [skills, setSkills] = useState([
        {title: 'HTML', exp: 'Junior', id: 1},
        {title: 'CSS', exp: 'Junior', id: 2},
        {title: 'JavaScript', exp: 'Junior', id: 3},
        {title: 'NodeJS', exp: 'Junior', id: 4},
        {title: 'React', exp: 'Junior', id: 5},
        {title: 'Bootstrap', exp: 'Junior', id: 6}
    ])

    return ( 
        <div className="home">
            <List skills={ skills }/>
        </div>
     );
}
 
export default Home;