import React from 'react';
import styles from "../style/footer.module.css"; 
import { WhatsApp ,Facebook,Instagram,LinkedIn} from '@mui/icons-material';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Contact Us</h3>
            <span>Email:<a href="mailto:srinijohn0910@gmail.com" className="text-primary"> srinijohn0910@gmail.com</a>
            </span>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
            <h3>Follow Us</h3>
            <ul className="list-inline">
              <li className="list-inline-item"> 
                <button className="btn ">
                  <WhatsApp/>
                </button>
              </li>
              <li className="list-inline-item">
                <button className="btn "><Facebook/></button>
              </li>
              <li className="list-inline-item">
                <button className="btn "><Instagram/></button>
              </li>
              <li className="list-inline-item">
                <button className="btn "><LinkedIn/></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
