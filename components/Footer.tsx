import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
//  import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

//  const iconStyle = {
//     fontSize: "12px", 
//     marginRight: "5px", 
//   };
const Footer = () => {
  return (
    <div id="Section_footer">
      <div className="text-center py-4 position-absolute ">
        <Link href="" target="_blank" className="btn btn-link">
          About Us
        </Link>
        <br></br>
        <Link href="" className="btn btn-link">
        Now Showing
        </Link>
        <br></br>
        <Link href="" className="btn btn-link">
          Upcoming 
        </Link>
        <br></br>
        <Link href="" className="btn btn-link">
        Terms & Conditions
        </Link>
        <br></br>
        <Link href="" className="btn btn-link">
        F&Q
        </Link>
        <br></br>
        <Link href="" className="btn btn-link">
        Contact Us
        </Link>
        <p>&copy; {new Date().getFullYear()} SAPHIRE</p>
        <div className="contact-info">
          <h2>Contact us at:</h2>
           <p>Phone: +123-456-7890</p>
           <p>Email: Saphire@Yahoo.com</p>
           </div>
         <div id="Icon " className="h-18 flex justify-center">
         <div>
          <a href="https://twitter.com/yourtwitterhandle" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="sm" className="h-3"></FontAwesomeIcon>
          </a>
          </div>
          <div>
          <a href="https://www.facebook.com/yourfacebookpage" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className="h-3" size="sm"></FontAwesomeIcon>
          
          </a>
          </div>
          <div>
          <a href="https://www.instagram.com/yourinstagramprofile" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="sm" className="h-3"></FontAwesomeIcon>
          </a>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Footer;
