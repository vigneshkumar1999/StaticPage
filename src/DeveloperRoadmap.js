import React from 'react'
import './DeveloperRoadmap.css'
function DeveloperRoadmap() {
  return (
    <div className='DeveloperRoadmap'>
            <nav className='navbar'>
                <ul className='logo'>
                    <img src='https://i.pinimg.com/564x/14/ce/13/14ce13dff4ba3a6255916b128dd9ec57.jpg'alt="RD Logo" width="50" height="50"></img>
                    <p className='title'>roadmap.sh</p>
                </ul>
            <ul className='features'>
                <li className='features-ind'>RoadMaps</li>
                <li className='features-ind'>Best Practices</li>
                <li className='features-ind'>Guides</li>
                <li className='features-ind'>Videos</li>
                <input type='text' placeholder='Search' className='search'></input>
            </ul>
            <ul className='user-login'>
                <li className='login'>Login</li>
                <button className='signup'>Signup</button>
            </ul>
            </nav>
            <div className='about'>
                <h1>Developer Roadmaps</h1>
                <p className='para'><span className='span'>roadmap.sh</span> is a community effort to create roadmaps, guides and other educational content to help guide developers in picking up a path and guide their learnings.</p>
            </div>
            <div className='RoleBasedRoadmaps'>
                <h2 className='subtitle'>Role Based Roadmaps</h2>
                <ul className='fields'>
                    <li className='featureslist'>Frontend</li>
                    <li className='featureslist'>Backend</li>
                    <li className='featureslist'>DevOps</li>
                    <li className='featureslist'>Fullstack</li>
                    <li className='featureslist'>Android</li>
                    <li className='featureslist'>PostgreSQL</li>
                    <li className='featureslist'>BlockChain</li>
                    <li className='featureslist'>QA</li>
                    <li className='featureslist'>Software Architect</li>
                    <li className='featureslist'>ASP.NTE Core</li>
                    <li className='featureslist'>C++</li>
                    <li className='featureslist'>Flutter</li>
                    <li className='featureslist'>CyberSecurity</li>
                    <li className='featureslist'>UX Design</li>
                    <li className='featureslist'>React Native</li>
                </ul>
            </div>
            <div className='SkillBasedRoadmaps'>
                <h2 className='subtitle'>Skill Based Roadmaps</h2>
                <ul className='fields'>
                    <li className='featureslist'>ComputerScience</li>
                    <li className='featureslist'>React</li>
                    <li className='featureslist'>Angular</li>
                    <li className='featureslist'>Vue</li>
                    <li className='featureslist'>Javascript</li>
                    <li className='featureslist'>Node.js</li>
                    <li className='featureslist'>Typescript</li>
                    <li className='featureslist'>Python</li>
                    <li className='featureslist'>System Design</li>
                    <li className='featureslist'>Java</li>
                    <li className='featureslist'>Spring Boot</li>
                    <li className='featureslist'>GO Roadmap</li>
                    <li className='featureslist'>GraphQL</li>
                    <li className='featureslist'>Design and Architecture</li>
                    <li className='featureslist'>Design System</li>
                    <li className='featureslist'>Code Review</li>
                    <li className='featureslist'>Docker</li>
                    <li className='featureslist'>Kubernetes</li>
                    <li className='featureslist'>MongoDB</li>
                    <li className='featureslist'>Prompt Engineering</li>
                </ul>
            </div>
            <div className='BestPractices'>
                <h2 className='subtitle'>Best Practices</h2>
                <ul className='fields'>
                    <li className='featureslist'>Frontend Performance</li>
                    <li className='featureslist'>API security</li>
                    <li className='featureslist'>GraphQL</li>
                    <li className='featureslist'>Code Reviews</li>
                    <li className='featureslist'>AWS</li>
                </ul>
            </div>
    </div>
  )
}

export default DeveloperRoadmap