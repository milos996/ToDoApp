import React from "react";


export default class ShowList extends React.Component{

    constructor(props){
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(e){
        this.props.completeItem(e.target.id);
    }

  render(){
      let my_item = this.props.items;
      let filter = this.props.filter;

      let list = my_item.map((val) => {
            if(filter === "completed"){
                // Only completed ones
                  if(val.completed)
                        return(<li key={val.id} id={val.id} className="list-group-item" onClick={this.handleToggle}> {val.task} { val.completed ? <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> : null} </li>);

            }else if(filter === "active"){
              //Only active ones
                  if(!val.completed)
                        return(<li key={val.id} id={val.id} className="list-group-item" onClick={this.handleToggle}> {val.task}  { val.completed ? <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> : null} </li>);

            }else{
              //All tasks
              return(<li key={val.id} id={val.id} className="list-group-item" onClick={this.handleToggle}> {val.task}  { val.completed ? <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> : null}</li>);
            }

            });

      return(
        <ul className="list-group">
        {list}
        </ul>
      );
  }
}
