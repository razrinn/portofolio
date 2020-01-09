import React from 'react';

const Sidebar = props => {
    return (
        <div className='text-center sidebar d-flex flex-column'>
            <a href='/#' className={props.home ? 'sidebarDot active' : 'sidebarDot'}>
                ●
            </a>
            {/* href="/#work">WORK</Nav.Link>
        <Nav.Link href="/#contact" */}
            <a href='/#about' className={props.about ? 'sidebarDot active' : 'sidebarDot'}>
                ●
            </a>
            <a href='/#work' className={props.portfolio ? 'sidebarDot active' : 'sidebarDot'}>
                ●
            </a>
            <a href='/#contact' className={props.contact ? 'sidebarDot active' : 'sidebarDot'}>
                ●
            </a>
        </div >
    );
};

export default Sidebar;