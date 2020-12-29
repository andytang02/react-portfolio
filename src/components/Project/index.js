import React, {useState} from 'react';

function Project({index}) {

    const [projects] = useState([
        {
            name: 'Weather Dashboard',
            image: "weather_dashboard.jpg",
            github: 'https://github.com/andytang02/weather-dashboard',
            link: 'https://andytang02.github.io/weather-dashboard',
            technologies: 'HTML/CSS/JS'
        },
        {
            name: 'Free Thinkers',
            image: "free_thinkers.png",
            github: 'https://github.com/Srikar2020/Free-Thinkers',
            link: 'https://protected-sierra-77345.herokuapp.com/',
            technologies: 'Node.js/Express.js/MySQL/CSS'
        },
        {
            name: 'Team Profile Generator',
            image: "team_profile_generator.png",
            github: 'https://github.com/andytang02/team-profile-generator',
            link: '',
            technologies: 'Node.js'
        },
        {
            name: 'Employee Tracker',
            image: "employee_tracker.png",
            github: 'https://github.com/andytang02/employee-tracker',
            link: '',
            technologies: "Node.js/MySQL"
        },
        {
            name: 'Bay Area Real Estate',
            image: "bay_area_real_estate.png",
            github: 'https://github.com/Srikar2020/Project1',
            link: 'https://srikar2020.github.io/Project1/',
            technologies: "HTML/CSS/JS"
        },
        {
            name: 'Workday Scheduler',
            image: "workday_scheduler.jpg",
            github: 'https://github.com/andytang02/super-disco',
            link: 'https://andytang02.github.io/super-disco',
            technologies: "HTML/CSS/JS"
          },
      ]);
    
    const project = projects[index];

    return (
        <article class="project">
            <div class={`project-img project-${index}`}>
                <div>
                    <h3>{project.name}</h3>
                    <h4>{project.technologies}</h4>
                </div>
            </div>
        </article>
    );
}

export default Project;