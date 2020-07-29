import React from 'react';
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';


function Header() {
    return (
        <div className= "header">
            <div className= "header_left">
            <MenuIcon/>
                <img 
                    className="header_logo"
                    src='https://cdn.worldvectorlogo.com/logos/youtube-2.svg' 
                    alt=''
                />
            </div>

            <div className= "header_input">
                <input placeholder='Search' type='text'/>  
                <SearchIcon className= "header_inputButton"/>  
            </div>
            
            <div className= "header_icons">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar 
                    alt= 'Hasan Tunc'
                    src= 'https://avatars1.githubusercontent.com/u/39636292?s=460&u=a29bef077d71d9e8eff9624c63d6451cbd8f79df&v=4'
                />
            </div>
        </div>
    );
}

export default Header;
