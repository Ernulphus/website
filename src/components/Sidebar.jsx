// Component for webpage sidebar with internal and external links
import {pages, links, contacts, pdfs} from "../constants";
import { Link } from 'react-router-dom';

import './Sidebar.css';
import FileDownloader from './FileDownloader/FileDownloader';

function Sidebar() {
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
    const personalContacts = contacts.map((contact) =>
        contact.href 
          ? (
              <Link
                to={contact.href} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  {contact.text}{contact.value && `: ${contact.value}`}
                </div>
              </Link>
          )
          : (
            <div key={contact.text}>
                {contact.text} : {contact.value}      
            </div>
          )
            
      );
    
    const downloads = pdfs.map((pdf) => (
      <FileDownloader className="sidebar-link-div" text={pdf.text} url={pdf.href} filename={pdf.filename} />
    ));

    return (
      <div className="sidebar-wrapper is-open" >
        <div className="sidebar-inner">
          <div className="sidebar">
            <div className='sidebarSection'>
              <b>Navigation</b>
              {navPages}
            </div>
            <div className="sidebarSection">
              <b>Links</b>
              {personalLinks}
            </div>
            <div className="sidebarSection">
              <b>Downloads</b>
              {downloads}
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