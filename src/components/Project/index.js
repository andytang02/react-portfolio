import React, {useState} from 'react';

function Project() {

    const [projects] = useState([
        {
            name: 'Weather Dashboard',
            image: '../../assets/weather_dashboard.jpg',
            github: 'https://github.com/andytang02/weather-dashboard',
            link: 'https://andytang02.github.io/weather-dashboard',
            technologies: 'HTML/CSS/JS'
        },
        {
            name: 'Free Thinkers',
            image: '../../assets/free_thinkers.png',
            github: 'https://github.com/Srikar2020/Free-Thinkers',
            link: 'https://protected-sierra-77345.herokuapp.com/',
            technologies: 'Node.js/Express.js/MySQL/CSS'
        },
        {
            name: 'Team Profile Generator',
            image: '../../assets/team_profile_generator.png',
            github: 'https://github.com/andytang02/team-profile-generator',
            link: '',
            technologies: 'Node.js'
        },
        {
            name: 'Employee Tracker',
            image: '../../assets/employee_tracker.png',
            github: 'https://github.com/andytang02/employee-tracker',
            link: '',
            technologies: "Node.js/MySQL"
        },
        {
            name: 'Bay Area Real Estate',
            image: '../../assets/bay_area_real_estate.png',
            github: 'https://github.com/Srikar2020/Project1',
            link: 'https://srikar2020.github.io/Project1/',
            technologies: "HTML/CSS/JS"
        },
        {
            name: 'Workday Scheduler',
            image: '../../assets/workday_scheduler.jpg',
            github: 'https://github.com/andytang02/super-disco',
            link: 'https://andytang02.github.io/super-disco',
            technologies: "HTML/CSS/JS"
          },
      ]);

  return (
    <div>

    </div>
  );
}

export default Project;