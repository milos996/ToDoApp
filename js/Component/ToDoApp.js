import React from "react";
import {connect} from "react-redux";

import FilterGroup from "./FilterGroup";
import InputGroup from "./InputGroup";
import ShowList from "./ShowList";

  import { addItem  } from "../actions";
  import { completeItem } from "../actions";
  import { setFilter } from "../actions";


@connect((store) => {
  return{
    items : store.items,
    filter : store.filter
  }
})

export default class ToDoApp extends React.Component{

  constructor(props){
      super(props);

      this.addItem = this.addItem.bind(this);
      this.setFilter = this.setFilter.bind(this);
      this.completeItem = this.completeItem.bind(this);
  }

  addItem(text){
      this.props.dispatch(addItem(text));
  }

  setFilter(filter){
    this.props.dispatch(setFilter(filter));
  }

  completeItem(id){
    this.props.dispatch(completeItem(id));
  }

  render(){
    return(
      <div className="col-sm-4">
        <InputGroup addItem = { this.addItem } />
        <ShowList items = { this.props.items } filter = { this.props.filter } completeItem = { this.completeItem } />
        <FilterGroup setFilter = { this.setFilter} filter = { this.props.filter } />
      </div>
    );
  }
}
