import React from "react";


export default class InputGroup extends React.Component{

    constructor(props){
      super(props);

      this.onClick = this.onClick.bind(this);
    }

    onClick(e){

      let newText = document.getElementById("newItem").value;
      document.getElementById("newItem").value = "";
      this.props.addItem(newText);

    }

  render(){

          return(
            <div className="input-group">
                <input id="newItem" type="text" className="form-control" placeholder="Add new item" />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button" onClick={ this.onClick}>Add</button>
                </span>
              </div>
          );
  }
}
