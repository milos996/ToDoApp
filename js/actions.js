
  export function addItem(text){
    return {
          type : "ADD_ITEM",
          payload:{
            text
          }
      };
  }

  export function completeItem(id){
      return {
          type: "COMPLETE_ITEM",
          payload:{
            id
          }
      };
  }

  export function setFilter(currentFilter){
      return {
          type: "SET_FILTER",
          payload:{
              filter : currentFilter
          }
      };
  }
