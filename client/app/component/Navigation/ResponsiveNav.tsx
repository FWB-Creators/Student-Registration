"use client";

import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
    const [showNav, setshowNav] = useState(false);
    const showNavHandler = () => setshowNav(true);
    const closeNavHandler = () => setshowNav(false);

    return (
        <div>
            <Nav openNav = {showNavHandler}/>
            <MobileNav nav={showNav} closeNav={closeNavHandler}/>
        </div>
    )
}

export default ResponsiveNav;