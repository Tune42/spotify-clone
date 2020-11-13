/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import Navbar from './navbar';
import Body from './body';
import Footer from './footer';
import Sidebar from './sidebar';

const Landing = () => {
    const [sidebar, setSidebar] = useState(false);
    return(
        <div className={sidebar ? 'scroll' : ''}>
            <Navbar setSidebar={setSidebar} sidebar={sidebar} />
            { sidebar && <Sidebar />}
            <Body />
            <Footer />
        </div>
    )
}

export default Landing;