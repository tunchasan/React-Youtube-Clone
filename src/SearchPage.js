import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import './SearchPage.css';
import { Link } from '@material-ui/core';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
                image="https://avatars1.githubusercontent.com/u/39636292?s=460&u=a29bef077d71d9e8eff9624c63d6451cbd8f79df&v=4"
                channel="Hasan Tunc"
                verified
                subs="3M"
                noOfVideos={422}
                description="You can find awesome programming videos."
            />
            <hr/>
            <VideoRow
                title="React Courses"
                views="2.3M Views"
                timestamp="3 days ago"
                channel="Hasan Tunc"
                image="https://i.ytimg.com/vi/DLX62G4lc44/maxresdefault.jpg"
                description="Let's get started to React."
                subs="1M"
            />
        </div>
    )
}

export default SearchPage;
