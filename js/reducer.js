
  export default function reducer(state={
        items : [],
        currentID : 0,
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
                ++currentID
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
