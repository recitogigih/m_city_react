import React from 'react';
import Featured from './Featured/index'
import Matches from './Matches'
import MeetPlayers from './meetPlayers'
import Promotion from './promotion'

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches/>
            <MeetPlayers/>
            <Promotion/>
        </div>
    );
};

export default Home;