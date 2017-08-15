import React from 'react';

const Search = (props) => {
  return(
  	<div className="apisearch">
    <input type="text"
      onChange={props.search}
      value={props.q}
      placeholder="Search From Api" />
      </div>
  )

}
export default Search;