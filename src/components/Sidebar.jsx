// Component for webpage sidebar with internal and external links
import {useState} from 'react';
import {pages, links, projects, contacts} from "../constants";

import './Sidebar.css';

function Sidebar() {
    const [open, setOpen] = useState(true);
    const navPages = pages.map((page) => (
      <div className='sidebar-link-div' key={page.name}>
        <a
          className="App-link"
          href={page.href}
        >{page.name}</a>
      <br/></div>
    ));
    const personalLinks = links.map((link) => (
        <div className='sidebar-link-div' key={link.text}><a
            className="App-link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >{link.text}</a>
          <br/></div>
      ));
    const personalProjects = projects.map((project) => (
        <div className='sidebar-link-div' key={project.text}><a
            className="App-link"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >{project.name}</a>
          <br/></div>
      ));
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
              <div className="sidebarSection">
                  <b>Project Repos</b>
                  {personalProjects}
              </div>
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