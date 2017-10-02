import React from "react";


export default class FilterGroup extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
      console.log(e.target.text);
      this.props.setFilter(e.target.text);
    }


  render(){

        let filter = this.props.filter;

          return(
        <ul className="nav nav-pills ">
          <li role="presentation" className={filter.toLowerCase() === "all" ? "active" : ""}><a href="#" onClick={this.handleClick}>All</a></li>
          <li role="presentation" className={filter.toLowerCase() === "active" ? "active" : ""}><a href="#" onClick={this.handleClick}>Active</a></li>
          <li role="presentation" className={filter.toLowerCase() === "completed" ? "active" : ""}><a href="#" onClick={this.handleClick}>Completed</a></li>
        </ul>
          );
  }
}
