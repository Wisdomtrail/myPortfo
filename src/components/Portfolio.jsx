import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import '../styles/Portfolio.css';
import myImage from '../assests/svg/illustration.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import TSH from '../assests/images/TSH.png'

const Portfolio = () => {

    const images = [
        TSH,
        'path/to/image2.jpg',
        'path/to/image3.jpg',
        'path/to/image4.jpg',
        'path/to/image5.jpg',
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
                    <a href="" data-hover="About">About</a>
                    <a href="" data-hover="Projects">Projects</a>
                    <a href="" data-hover="Resume/Cv">Resume/Cv</a>
                    <a href="" data-hover="Contact">Contact</a>
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
                <a href="" data-hover="About">About</a>
                <a href="" data-hover="Projects">Projects</a>
                <a href="" data-hover="Resume/Cv">Resume/Cv</a>
                <a href="" data-hover="Contact">Contact</a>
            </div>

            <br /><br /><br /><br /><br />

            <div className='body'>
                <div className='Info'>
                    <span>Welcome to my portfolio website!</span>
                    <h1>Hey folks, I'm <span className="name">Sunday</span><br /><span className="title">Web Designer</span></h1>
                    <span>Building a successful product is a challenge. I am highly energetic in user <br /> experience design, interfaces and web development.</span>
                    <br /><br />
                    <button> <FontAwesomeIcon icon={faFile} /> Download resume</button>
                </div><br /><br /><br /><br />
                <div className='Image'>
                    <img id='myImage' src={myImage} alt="" />
                </div>
            </div>
            <div className='projects'>
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
            <div className='resume'>
                <div className='resumeContent'>
                    <div className='experiences'>
                        <h1>Experiences</h1>
                        <br />
                        <div className='timeline'>
                            <span className='year'>2023</span>
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
                    <div>
                        <h1>Educations</h1>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;
