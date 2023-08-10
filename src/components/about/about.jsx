import React from 'react';
import styles from './about.css'
import VectorIcon from '../../assets/Vector.svg'


const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-container">

                <div className="about-things">
                    <div className="about-content" id="aboutUs">
                        <p>ABOUT US</p>
                    </div>
                    <ul>
                        <li>
                            <span><img src={VectorIcon} alt="Engine icon" width="40" height="40"/></span>
                            <h6>3 years working experience</h6>
                        </li>
                        <li>
                            <span><img src={VectorIcon} alt="Engine icon" width="40" height="40"/></span>
                            <h6>Friendly and communicative staff</h6>
                        </li>
                        <li>
                            <span><img src={VectorIcon} alt="Engine icon" width="40" height="40"/></span>
                            <h6>We pick the best option right for you</h6>
                        </li>
                        <li>
                            <span><img src={VectorIcon} alt="Engine icon" width="40" height="40"/></span>
                            <h6>Also providing e-bikes for rent!</h6>
                        </li>
                        <li>
                            <span><img src={VectorIcon} alt="Engine icon" width="40" height="40"/></span>
                            <h6>#1 on building e-bikes in Tallinn</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;