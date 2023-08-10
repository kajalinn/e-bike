import React from 'react';
import styles from './contact.css'
import TelegramIcon from '../../assets/telegram-circle.svg'
import InstaIcon from '../../assets/insta-circle.svg'
import FacebookIcon from '../../assets/facebook-circle.svg'
import LocationIcon from '../../assets/location-circle.svg'
import PhoneIcon from '../../assets/phone-circle.svg'
import MessageIcon from '../../assets/message-circle.svg'


const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact-container">
                <div className="contact-content open-hours" id="contact">
                    <div className="open-hours-schedule">
                        <ul>
                            <li className="open-hours-title">
                                <h2>Open</h2>
                            </li>
                            <li className="schedule-working-days">
                                <h6 className="schedule-workday-h6">
                                    Mon. - Sat.
                                </h6>
                                <h6>
                                    10:00-19:00
                                </h6>
                            </li>
                            <li className="schedule-working-days">
                                <h6 className="schedule-freeday-h6">
                                    Sun.
                                </h6>
                                <h6>
                                    Closed
                                </h6>
                            </li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul>
                            <li>
                                <a href="https://t.me/Elektripunkt">
                                    <img src={TelegramIcon} alt="Engine icon" width="45" height="45"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://Instagram.com/elektripunkt">
                                    <img src={InstaIcon} alt="Engine icon" width="45" height="45"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100093225113320">
                                    <img src={FacebookIcon} alt="Engine icon" width="45" height="45"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contact-content contact-details" id="contact">
                    <div className="contact-points">
                        <ul>
                            <li>
                                <a href="https://www.google.com/maps/place/Lastekodu+8,+10113+Tallinn/@59.4314219,24.7642804,17z/data=!3m1!4b1!4m6!3m5!1s0x469294a752f0e705:0x7baf50c9ffe3a47f!8m2!3d59.4314219!4d24.7642804!16s%2Fg%2F11bw3_hrdj?entry=ttu">
                                    <img src={LocationIcon} className="cnt-icon" alt="Engine icon" width="45" height="45"/>
                                    <h6>
                                        Lastekodu 8, Tallinn, 10113
                                    </h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={PhoneIcon} className="cnt-icon" alt="Engine icon" width="45" height="45"/>
                                    <h6>
                                        +372 56600261
                                    </h6>
                                    &nbsp;
                                    &nbsp;
                                    <h6>
                                        +372 58393595
                                    </h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={MessageIcon} className="cnt-icon" alt="Engine icon" width="45" height="45"/>
                                    <h6>
                                        elektripunktinfo@gmail.com
                                    </h6>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;