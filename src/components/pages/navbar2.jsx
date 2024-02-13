import React from 'react';
import styles from '../style/navbar2.module.css'; // Import the CSS module file

function UpwardNavbar() {
    return (
        <div>
            
            <div className={styles.nav2 + " container"}>
                <div className="row">
                    <div className="fw-bolder col-md-4">
                        <nav className={styles.nav2 + " nav-pills flex-column"}>
                            <a className=".nav-link" href="#item-1">
                                <span >category</span> <br/>
                                
                            </a>
                        </nav>
                    </div>
                    <div className="fw-bolder col-md-4">
                        <nav className={styles.nav2 + " nav-pills flex-column"}>
                            <span className={styles.navLink + " ml-3 my-1"} href="#item-1-1">
                                OFFERS
                            </span>
                        </nav>
                    </div>
                    <div className="col-md-4 fw-bolder">
                        <span className={styles.navLink + " ml-3 my-1"} href="#item-1-2">
                            TODAY offers
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpwardNavbar;
