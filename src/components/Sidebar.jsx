// Component for webpage sidebar with internal and external links
import {useState} from 'react';
import {pages, links, contacts} from "../constants";
import { Link } from 'react-router-dom';

import './Sidebar.css';

function Sidebar() {
    const [open, setOpen] = useState(true);
    const navPages = pages.map((page) => (
      <Link
          to={page.href}
        >
      <div className='sidebar-link-div' key={page.name}>
        {page.name}
      <br/></div>
      </Link>
    ));
    const personalLinks = links.map((link) => (
        <Link
            to={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className='sidebar-link-div' key={link.text}>
              {link.text}
            </div>
          </Link>
      ));
    // const personalProjects = projects.map((project) => (
    //     <div className='sidebar-link-div' key={project.text}><a
    //         className="App-link"
    //         href={project.href}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >{project.name}</a>
    //       <br/></div>
    //   ));
    const personalContacts = contacts.map((contact) => (
        <div key={contact.text}>
            {contact.text} : {contact.value}      
        </div>
      ));

    const openSidebar = () => {
      setOpen(true);
    }
    const closeSidebar = () => {
      setOpen(false);
    }

    return (
      <div className={`sidebar-wrapper ${open ? "is-open" : ""}`} >
        <div className="sidebar-inner">
          <div className="sidebar">
              {(
                open
                ? <button
                    className='sidebarButton'
                    type="button" 
                    onClick={closeSidebar}>
                      Hide NavBar
                  </button>
                : <button className="sidebarButton" 
                  type="button" 
                  onClick={openSidebar}>
                    Show NavBar
                </button>
              )}
              <div className='sidebarSection'>
                  <b>Navigation</b>
                  {navPages}
              </div>
              <div className="sidebarSection">
                  <b>Links</b>
                  {personalLinks}
              </div>
              {/* <div className="sidebarSection">
                  <b>Project Repos</b>
                  {personalProjects}
              </div> */}
              <div className="sidebarSection">
                  <b>Contact</b>
                  {personalContacts}
              </div>
          </div>
          </div>
      </div>
    );
}

export default Sidebar;