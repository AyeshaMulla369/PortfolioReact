import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MobileIcon from '@mui/icons-material/DeveloperMode';
import WorkIcon from '@mui/icons-material/AllInclusive';
import TerminalIcon from '@mui/icons-material/Terminal';
import SchoolIcon from '@mui/icons-material/School';
import PhonelinkIcon from '@mui/icons-material/Phonelink';

export default function Experience() {
  return (
    <div style={{marginTop:70, padding:20, backgroundColor:'#EEEEEE'}}>
    <VerticalTimeline >
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#053893', color: '#fff', padding:20 }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Jan 2024 - May 2024"
            iconStyle={{ background: '#053893', color: '#fff' }}
            icon={<MobileIcon />}
        >
            <h3 className="vertical-timeline-element-title">React Native Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Pried.in</h4>
            <p>
            Currently engaged in developing React Native applications for the company. Working on building around 30+ features in the app including WebView’s, Facilities, 
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2023 - March 2024"
            iconStyle={{ background: '#000', color: '#fff' }}
            icon={<TerminalIcon />}
        >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">SyntHeim</h4>
            <p>
            • Developed interactive social app during internship, demonstrating proficiency in React Native for app frontend and MongoDB for 
backend development, including the creation of REST APIs using MERN and Flask APIs. 
<br/>• Enhanced the mass audio call functionality, boosting scalability and reliability by an impressive 70%.  
<br/>• Worked on creating about 27+ features for the app, including audio chat rooms, creating clubs, AI bot and more. 
<br/>• Made customer interaction faster by working on the AI bot feature for navigation, creation of posts, invites etc., with language 
translation and speech translation.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2023 - September 2023"
            iconStyle={{ background: '#069BBD', color: '#fff' }}
            icon={<PhonelinkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Full-Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Varcons Technologies</h4>
            <p>
            Demonstrated expertise in full-stack development, utilizing React.js for the frontend and Django for the backend, resulting in  the 
creation of a fully functional restaurant website with reservation, location and mail subscription facilities. 
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2023 - August 2023"
            iconStyle={{ background: '#CF3208', color: '#fff' }}
            icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Marsian Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Persistence</h4>
            <p>
            During the internship, I immersed myself in a comprehensive learning experience, delving into the basics of Linux, Core Java, data 
structures and algorithms, and Database Management with SQL. 
            </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020 - 2024"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Bachelor of Engineering in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
            Creative Direction, Visual Design
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
  );
}
