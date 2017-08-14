import React, { Component } from 'react';

class SportList extends Component {

  renderList(){
    return this.props.sports.map((sport, index) => {
      return(
        <li key={index}>
          <h2
            onClick={(e) => {
              this.props.setSport(sport);
            }}
            className="link"
          > { sport.name}</h2>
          <h1>{sport.state}</h1>
          <img src={sport.img} alt={sport.name} />

          <div
            className="button"
            onClick={()=>{this.props.button.onClick(sport)}}
            >{this.props.button.text}</div>
        </li>
      )
    })
  }

  render(){
    return(
      <ul>{this.renderList()}</ul>
    )
  }
}
export default SportList;