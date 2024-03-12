import React from 'react'
import './Header.css'


const nav__links = [
    {
        path:'#home',
        display:'Home'
    },

    {
        path:'#about',
        display:'About'
    },
    {
        path:'#community',
        display:'Community'
    },
    {
        path:'#group',
        display:'Group'
    },
    {
        path:'#Roadmap',
        display:'Roadmap'
    },

]
const Header = () => {
  return (
    <header className="header">
    <div className='container'>
       <div className='nav__wrapper'>
             <div className='logo'>
                <h2>Zero Factorial</h2>
             </div>

             {/* navigation */}
             <div className='navigation'>
                <ul className='menu'>
                     {
                        nav__links.map( (item,index)=>(
                            <li className='menu__item'>
                                <a href={item.path} className='menu__link'>
                                    {item.display}
                                </a>
                            </li>))
                     }          
                </ul>
             </div>
             {/*              lightmode */}
            <div className='light__mode'>
                <span > <i class="ri-sun-line"> </i>
                 Light Mode
                </span>
            </div> 
       </div>

    </div>

    </header>

  )
}

export default Header