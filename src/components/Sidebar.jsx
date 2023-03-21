// Component for webpage sidebar with internal and external links
import {useState} from 'react';
import {links} from "../constants";

function Sidebar() {
    const [open, setOpen] = useState(false);
    const personalLinks = links.map((link) => (
        <div><a
            className="App-link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >{link.text}</a>
          <br/></div>
      ));
    if (!open) {
        return (<button className="sidebarButton" 
            type="button" 
            onClick={()=>setOpen(true)}>
                Show Sidebar
            </button>);}
    return (
        <div className="sidebar">
        <button 
            type="button" 
            onClick={()=>setOpen(false)}>
                Hide Sidebar
        </button>{personalLinks}</div>
    );
}

export default Sidebar;