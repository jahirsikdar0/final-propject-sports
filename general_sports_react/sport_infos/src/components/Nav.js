import React from 'react';

const Nav = (props) => {
  return(
    <nav>
      <div onClick={()=>{props.changeMode('sports')}}>All Sports</div>
      <div onClick={()=>{props.changeMode('search')}}>Search</div>
    </nav>
  )
}

export default Nav;