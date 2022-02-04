import React from 'react';
import './footer.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Footer = () => {
    return(
        <div className="footer">
            <div className="footer_xl">
            <a href="#" > <p> ABOUT</p></a> <MoreVertIcon />
            <a href="#" > <p> BONUS</p></a> <MoreVertIcon />
            <a href="#" > <p> CONTACT</p> </a> <MoreVertIcon />
            <a href="#" > <p> SECURITY</p></a> <MoreVertIcon />
            <a href="#" > <p> RESPONSIBLE&nbsp;PLAY</p></a> <MoreVertIcon />
            <a href="#" > <p> PRIVACY</p></a> <MoreVertIcon />
            <a href="#" > <p> TERMS </p></a>
            </div>
            <div className="footer_mob">
                <a href="#" ><p>KNOW MORE</p></a>
            </div>
        </div>
    )
}

export default Footer;
