import React from 'react';
import {Link} from "react-router-dom";
import Search from "../Components/Search";
import UserIcons from "../Components/userIcons";

const Home = () => {
    return (
        <div className={'home'}>

            <div className="home__header">

                <div className="home__headerRight">
                    <Link to={'/gmail'}>Gmail</Link>
                    <Link to={'/image'}>Image</Link>
                    <UserIcons/>
                </div>

            </div>

            <div className="home__body">
                <img src="https://www.google.co.uz/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/>
                <div className="home__inputContainer">
                    <Search hideButtons={false}/>
                </div>
            </div>

        </div>
    );
};

export default Home;