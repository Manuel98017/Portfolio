import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

const About = () => {


    const [skills, setSkills] = useState([
        { title: 'JavaScript', qualifier: 'Skill', description: 'Junior', id: 1 },
        { title: 'NodeJS', qualifier: 'Skill', description: 'Junior', id: 2 },
        { title: 'React', qualifier: 'Skill', description: 'Junior', id: 3 },
    ]);

    const [experience, setExperience] = useState([
        { title: 'Rater', qualifier: 'Where', description: 'Telus Int.', id: 3 }
    ])

    const [studies, setStudies] = useState([
        { title: 'Full Stack Developer', qualifier: 'Where', description: 'Digital House', id: 1 },
        { title: 'UX Designer', qualifier: 'Where', description: 'Google', id: 2 },
    ])

    return (
        <div className="home">
            <div className="home-list">
                <h2>Experiencia</h2>
                <div className="list">
                    <h2>Rater</h2>
                    <p>Where: Telus Int.</p>
                </div>
            </div>
        </div>
    );
}

export default About;