// Component for webpage sidebar with internal and external links
import {useState} from 'react';
import {links, projects, contacts} from "../constants";

import './Sidebar.css';

function Sidebar() {
    const [open, setOpen] = useState(false);
    const personalLinks = links.map((link) => (
        <div className='sidebar-link-div'><a
            className="App-link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >{link.text}</a>
          <br/></div>
      ));
    const personalProjects = projects.map((project) => (
        <div className='sidebar-link-div'><a
            className="App-link"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >{project.text}</a>
          <br/></div>
      ));
    const personalContacts = contacts.map((contact) => (
        <div>
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
        <div className={`sidebar ${open ? "sidebar-open" : "sidebar-closed"}`} >
            {(
              open
              ? <button
                  className='sidebarButton'
                  type="button" 
                  onClick={closeSidebar}>
                    Hide Links
                </button>
              : <button className="sidebarButton" 
                type="button" 
                onClick={openSidebar}>
                  Show Links
              </button>
            )}
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
    );
}

export default Sidebar;