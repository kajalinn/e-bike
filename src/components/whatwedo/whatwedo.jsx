import React from 'react';
import styles from './whatwedo.css'
import Icon3 from '../../assets/battery3.svg'
import Icon from '../../assets/repairOne.svg'
import Icon2 from '../../assets/lightningTwo.svg'


const whatwedo = () => {
    return (
        <div className="doings-wrapper">
            <div className="doings-container">
                <div className="doings-title" id="doings">
                    <div className=" doings-line doings-first">
                    </div>
                    <div className="doings-text">
                        <p>WHAT WE DO</p>
                    </div>
                    <div className="doings-line doings-third">
                    </div>
                </div>
                <div className="doings-content">
                    <div>
                        <img src={Icon} alt="Repair" width="140" height="140"/>
                        <p>REPAIRING E-BIKES, ELECTRIC SCOOTER <br/> AND ETC.</p>
                    </div>
                    <div>
                        <img src={Icon2} alt="Upgrade" width="140" height="140"/>
                        <p>UPGRADING BICYCLES TO E-BIKES! <br/> CHECK SOLUTIONS FOR SUITABLE KITS.</p>
                    </div>
                    <div>
                        <img src={Icon3} alt="Fix battery" width="140" height="140"/>
                        <p>BUILDING, FIXING ELECTRIC BATTERIES. <br/> DIAGNOSTICS, CAPACITY CHECK AND OTHER HELP.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default whatwedo;