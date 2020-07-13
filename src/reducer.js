
import {CHANGE_SEARCH_FIELD} from './constant.js';
const initialState = {
  searchField:''
};

export const searchRobots = (state = initialState,action ={}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
        return Object.assign({},state,{searchField:action.payload});
        //new object is created with {},  then everything present is copied into it and search field is updated
//      break;
    default:
      return state;
  }
}
