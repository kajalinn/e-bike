import React from 'react';
import styles from './greetwall.css'
import {useEffect} from "react";
import NavBar from "../navbar/navbar"
import bgImage from '../../assets/WALLBG.svg'
import LG from '../../assets/ELPUNKTLOGO.svg'


const Greetwall = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show')
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));



    })
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show')
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hiddenX');
        hiddenElements.forEach((el) => observer.observe(el));



    })

    return (
    <div className="wrapper">
        <div className="hero-container" style={{ backgroundImage: `url(${bgImage})` }}>
            <NavBar/>
            <section className="hero hidden" id="hero">
                <img  className="wall-img" src={LG} alt="logo" width="700" height="300"/>
                {/*<span className="hero-text">*/}
                {/*    <p>BUILD&nbsp;&nbsp;UPGRADE&nbsp;&nbsp;FIX</p>*/}
                {/*</span>*/}
            </section>
        </div>
    </div>
    );
};

export default Greetwall;