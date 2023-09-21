import React, { useEffect } from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiBootstrap,
  DiDatabase,
  DiDjango,
  DiFirebase,
  DiLinux,
  DiJenkins,
  DiMysql,
  DiNpm,
  DiPhp,
  DiSqllite,
  DiJira,
  
} from "react-icons/di";
import "./Skills.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {

  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div className="skills" id="skill">
        <h1>Skills</h1>
        <div data-aos="slide-left" data-aos-duration="4000">
            <DiJava/>
            <DiPython/>
            <DiJavascript1/>
            <DiPhp/>
            <DiNodejs/>
        </div>
       <div data-aos="slide-right" data-aos-duration="4000">
        <DiDjango/>
        <DiNpm/>
        <DiAndroid/>
        <DiLinux/>
        <DiBootstrap/>
       </div>
       <div data-aos="slide-left" data-aos-duration="4000">
        <DiDatabase/>
        <DiMysql/>
        <DiMongodb/>
        <DiFirebase/>
        <DiSqllite/>
       </div>
       <div data-aos="slide-right" data-aos-duration="4000">
        <DiReact/>
        <DiBootstrap/>
        <DiGit/>
        <DiJira/>
        <DiJenkins/>
       </div>
        

    </div>
  );
}

export default Skills;