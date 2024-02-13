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
            <span>Email:<a className="text-primary"> srinijohn0910@gmail.com</a>
            </span>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
            <h3>Follow Us</h3>
            <ul className="list-inline">
          <li className="list-inline-item"><a href="#"><WhatsApp/></a></li>
              <li className="list-inline-item"><a href="#"><Facebook/></a></li>
              <li className="list-inline-item"><a href="#"><Instagram/></a></li>
              <li className="list-inline-item"><a href="#"><LinkedIn/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
