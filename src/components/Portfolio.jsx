import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import '../styles/Portfolio.css';
import myImage from '../assests/svg/illustration.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import TSH from '../assests/images/TSH.png';
import PrivShare from '../assests/images/PrivShare.jpeg';
import egen from '../assests/images/egen.jpeg';
import Menjar from '../assests/images/Menjar.jpeg';
import ERescue from '../assests/images/ERescue.jpeg';
const Portfolio = () => {

    const images = [
        TSH,
        PrivShare,
        egen,
        Menjar,
        ERescue
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="mainContainer">
            <div className="topNav">
                <div className='userDiv'>
                    <FontAwesomeIcon id='faUser' icon={faUser} />
                    Sunday
                </div>
                <div className='topNavLinks'>
                    <a href="#info" data-hover="About">About</a>
                    <a href="#projects" data-hover="Projects">Projects</a>
                    <a href="#resume" data-hover="Resume/Cv">Resume/Cv</a>
                    <a href="#contactMe" data-hover="Contact">Contact</a>
                </div>

                <div className='theme'>
                    <span id='themeColor'>
                        <FontAwesomeIcon id="faMoon" icon={faMoon} />
                        Color mode
                    </span>
                    <FontAwesomeIcon id='menuIcon' icon={faBars} onClick={toggleDropdown} />
                </div>
            </div>

            {/* Dropdown Menu */}
            <div className={`dropdownMenu ${isDropdownOpen ? 'open' : ''}`}>
                <a href="#info" data-hover="About">About</a>
                <a href="#projects" data-hover="Projects">Projects</a>
                <a href="#resume" data-hover="Resume/Cv">Resume/Cv</a>
                <a href="#contactMe" data-hover="Contact">Contact</a>
            </div>

            <br /><br /><br /><br /><br />

            <div className='body'>
                <div className='Info' id='info'>
                    <span>Welcome to my portfolio website!</span>
                    <h1>Hey folks, I'm <span className="name">Sunday</span><br /><span className="title">Web Designer</span></h1>
                    <span>Building a successful product is a challenge. I am highly energetic in user <br /> experience design, interfaces and web development.</span>
                    <br /><br />
                    <a href='' download={'../assests/file/myCv.pdf'}>
                        <button>
                            <FontAwesomeIcon icon={faFile} /> Download resume
                        </button>
                    </a>

                </div><br /><br /><br /><br />
                <div className='Image'>
                    <img id='myImage' src={myImage} alt="" />
                </div>
            </div>
            <div className='projects' id='projects'>
                <h1 id='projectHeading'>Projects Developed for Corporate <br /> Clients</h1>

                <div className="project-images">
                    <button className="arrow left" onClick={prevImage}>&lt;</button>
                    <img src={images[currentIndex]} alt={`Project ${currentIndex + 1}`} />
                    <button className="arrow right" onClick={nextImage}>&gt;</button>
                    <div className="indicators">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
            <div className='resume' id='resume'>
                <div className='resumeContent'>
                    <div className='experiences' id='experiences'>
                        <h1>Experiences</h1>
                        <br />
                        <div className='timeline'>
                            <span className='year' id='year'>2023</span>
                            <div className='timelineInfo'>
                                <h2>SoftWare Developer</h2>
                                <span>
                                    • Developed efficient algorithms for data processing. <br />
                                    • Created engaging user interfaces for client applications.<br />
                                    • Contributed to a cutting-edge mobile application, implementing real-time chat<br />
                                    functionality and push notifications.<br />
                                    • Worked on a secret project involving machine learning and natural language processing.<br />
                                    • Conducted code reviews and participated in team discussions.<br />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='education' id='education'>
                        <h1>Educations</h1>
                        <br />
                        <div className='timeline'>
                            <span className='eyear' id='eyear'>2023</span>
                            <div className='timelineInfo'>
                                <h2>Education</h2>
                                <span>
                                    • Developed a fully functional web application from scratch.<br />
                                    • Mastered various programming languages and technologies.<br />
                                    • Achieved hands-on experience with Java, Python, Django, Spring Boot, React, MySQL, NestJs, NodeJs, MongoDB.<br />
                                    • Developed efficient algorithms for data processing.<br />
                                    • Created engaging user interfaces for client applications.<br />
                                    • Contributed to a cutting-edge mobile application, implementing real-time chat functionality and push notifications.<br />
                                    • Worked on a secret project involving machine learning and natural language processing.<br />
                                    • Conducted code reviews and participated in team discussions.<br />
                                    • Organized team-building events, fostering a positive team culture.<br />
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='contactMe' id='contactMe'>
                <div className='map' id="map">
                    <div className='col-lg-5 mr-lg-5 col-12'>
                        <div className='google-map w-100'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12088.558402180099!2d-73.99373482142036!3d40.75895421922642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855b8fb3083%3A0xa0f9aef176042a5c!2sTheater+District%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2smm!4v1549875377188"
                                width="100%"
                                height="300"
                                frameBorder="0"
                                style={{ border: 0 }} // Use an object for inline styles
                                allowFullScreen=""
                            ></iframe>
                        </div>
                        <div className='contact-info d-flex justify-content-between align-items-center py-4 px-lg-5' >
                            <div className='contact-info-item'>
                                <h3 className='mb-3 text-white'>Say hello</h3>
                                <p className='footer-text mb-0' id='number'>08134132226</p>
                                <p><a href="mailto:hello@domain.co" className='text-white'>sunepa091522@gmail.com</a></p>
                            </div>
                            <ul className='social-links d-flex'>

                            </ul>
                        </div>
                        <br /><br />
                    </div>
                </div>

                <div className='work'>
                    <h1>
                        Interested to work together? <br /> <span> Let's talk</span>
                    </h1>
                    <div>
                        <div id='gg' className='gg'>
                            <input type="text" placeholder='Your Name' /><br />
                            <input type="text" placeholder='Email' /><br />
                        </div>
                        <textarea className='message' placeholder='message' id='message'></textarea><br />
                        <button className='submit' id='submit'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
