import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';

const menuItems = [
    {name: 'Dashboard', to :'/'},
    {name: 'Admin', to:'/admin'},
];
const Hamburg= (props) => {
    const [inactive, setInactive] = useState(false);
    useEffect(() =>{
        if(inactive){
             
        }
        props.onCollapse(inactive);
    },[inactive]

    )
    return(
        <div className={`ham-burg ${inactive ? "inactive": ""}`}> 
        <div className='top-section'>
            <div className='logo'>
                 <img src='logo192.png' alt='webscript'/>
            </div>
            <div onClick={() => {
                 
                setInactive(!inactive);
            }} 
            className='toggle-menu-btn'>
               <img src='logo512.png' alt='webscript'/>
            </div>
        </div>
        <div className='search-component'>
            <input type='text' placeholder='search'></input>

        </div>
        <div className='divider'>

        </div>
        <div className='main-menu'>
            <ul>
                {menuItems.map((menuItem, index)=>(
                    <MenuItem
                     key = {index}
                     name = {menuItem.name}
                     to = {menuItem.to}
                     subMenus = {menuItem.subMenus || []
                        
                     }
                    />
                ))}
                {/*<li>
                    <a className='main-item'><span>Dashboard</span></a>
                </li>
                <li>
                    <a className='main-item'><span>Admin</span></a>
        </li>*/}
            </ul>
        </div>
        </div>
    )
}

export default Hamburg