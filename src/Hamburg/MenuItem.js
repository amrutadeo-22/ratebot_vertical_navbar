import React, { useState } from 'react';
const  MenuItem= (props) =>{
    const { name, subMenus} = props;
    const [expand, setExpand] = useState(false);
    return(
          <li>
        <a className='main-item'> 
          
         <span>{name}</span>
        </a>
        {subMenus && subMenus.length > 0 ? (
         <ul className='sub-menu'>
            {subMenus.map((menu,index) => (
                <li key = {index}>
                    <a>{menu.name}</a>
                </li>
            ))}
         </ul>   
        ):null
    }
    </li> 
    )

}
export default MenuItem