  const itemsCurrent = [{
    task:  "First",
    completed : false,
    id : 0
  },{
    task:  "Second",
    completed : false,
    id : 1
  },]

  export default function reducer(state={
        items : itemsCurrent,
        currentID : 1,
        filter : "all"
  }, action ) {

        switch (action.type) {
          // add new item
          case "ADD_ITEM":
              return {
                ...state,
                items: [...state.items, {
                                task:  action.payload.text,
                                completed : false,
                                id : state.currentID + 1
                            }
                ],
                currentID: ++currentID
              };
            break;
            //Set another filter
          case "SET_FILTER":
                return{
                  ...state,
                  filter : action.payload.filter
                }
            break;
            //When user click on item we check it as done
          case "COMPLETE_ITEM":
                let {id} = action.payload;
                let newItems = state.items.map((val) => {
                      if(val.id === id ){
                          return {
                              ...val,
                              completed: true
                          };
                      }
                      return val;
                });

              return{
                ...state,
                items : newItems
              };
            break;
          default:
              return state;
        }
  }
