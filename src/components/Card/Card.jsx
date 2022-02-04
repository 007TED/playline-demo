import React , { useState } from 'react';
import './card.css';
import {Button} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NotificationsIcon from '@mui/icons-material/Notifications';

import GooglePlayLogo from '../../assets/icons/google-play@3x.png';
import AppStoreLogo from '../../assets/icons/ios-app@3x.png';

import Gordon from '../../assets/headshots/Aaron Gordon -PLP59D7092156491v2.png';
import Davis from  '../../assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png';
import Russell from '../../assets/headshots/Dangelo Russell PLP59D709255D994v4.png';
import Leonard from '../../assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png';
import Lowry from '../../assets/headshots/Kyle-Lowry-PLP59D70927DF104.png';
import James from '../../assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png';
import Siakam from '../../assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png';

import PlayersData from '../../assets/json/players.json';

const Card = () => {
    const [selectedPlayers] = useState(PlayersData.players);

const Headshots =  [James, Davis, Gordon , Siakam ,Leonard , Lowry ,Russell];


return(
        <div className="card-container">
            <div className="progress-bar">
                <div className="progress-bar-one"></div>
                <div className="progress-bar-two"></div>
                <div className="progress-bar-three"></div>
                <div className="progress-bar-four"></div>
            </div>
            <div className="card-container-message">
                <p className="card-container-message-status">
                    YOUR PLAYLINE IS SET!
                </p>
                <p className="card-container-message-tracking">
                    COMEBACK @7:30PM TO TRACK IT LIVE!
                </p>
            </div>
            <hr />
            <br/>
            <div className="selected_players_container" >
                <AvatarGroup  max={7}  className="selected_players-avatar-group">
                {selectedPlayers.map(({last_name, points}, i) =>(
                <div key={i} className="selected_players" >
                        <Avatar src={Headshots[i]} className="avatar-container-item"/>
                <br />
                    <div className="selected_Players-lastName">
                    {last_name}
                        </div>
                    <br />
                    <div className="dot">
                        <div className="value">{points}</div>
                    </div>
                    <p className="selected_players-point-para">PTS</p>
                </div>
                ))}
                </AvatarGroup>
            </div>
            <div className="playline_cta">
                <Button variant="outlined" startIcon={<NotificationsIcon color="secondary"/>} className="playline_cta-notify"> NOTIFY ME</Button>
                &nbsp;
                <Button variant="outlined" startIcon={<AttachMoneyIcon color="secondary"/>} className="playline_cta-deposit"> DEPOSIT</Button>
            </div>
             <br />
            <hr />
            <div className="app_link-container">
                <div>
                    <h3>DOWNLOAD THE APP</h3>
                </div>
            </div>
            <div className="app_link-container_links">
                <a href="#"><img src={GooglePlayLogo} alt="play store"  /> </a>
                <a href="https://apps.apple.com/ca/app/playline/id1265657853"><img src={AppStoreLogo} alt="app store" /> </a>
            </div>
    </div>
    )
}

export default Card;